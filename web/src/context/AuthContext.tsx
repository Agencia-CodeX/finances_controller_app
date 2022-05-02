/* eslint-disable dot-notation */
/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosError } from "axios";
import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../service/apiClient";

type SingInCredentials = {
    email: string;
    password: string;
};

type RegisterCredentials = {
    name: string;
    email: string;
    password: string;
};

type AuthContextData = {
    singIn: (credentials: SingInCredentials) => Promise<void>;
    register: (credentials: RegisterCredentials) => Promise<void>
    signOut: () => void;
    user: User;
    isAuthenticated: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
};

type User = {
    name: string;
    email: string;
    isVip: boolean;
    isAdmin?: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel

export function signOut() {
    destroyCookie(undefined, "qfinance.token")
    destroyCookie(undefined, "qfinance.refreshToken")

    authChannel.postMessage('signOut')

    Router.push("/login")
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {
        authChannel = new BroadcastChannel("auth")

        authChannel.onmessage = (message) => {
            switch (message.data) {
                case "signOut":
                    Router.push("/login")
                    break
                default:
                    break
            }
        }
    })

    useEffect(() => {
        const { "qfinance.token": token } = parseCookies();

        if (token) {
            api.get("/users/info")
                .then((response) => {
                    const {
                        name,
                        email,
                        isVip,
                        isAdmin,
                    } = response.data;
                    setUser({
                        name,
                        email,
                        isVip,
                        isAdmin,
                    });
                })
                .catch((() => {
                    signOut()
                }))
        }
    }, []);

    async function singIn({ email, password }: SingInCredentials) {
        const idToast = toast.loading("Carregando...");

        await api
            .post("sessions", {
                email: email,
                password: password,
            })
            .then((response) => {
                const { token, refresh_token, user } = response.data;

                const name = user.name;
                const isVip = user.is_Vip;
                const isAdmin = user.is_Admin;

                setUser({ name, email, isVip, isAdmin });

                setCookie(undefined, "qfinance.token", token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 dias
                    path: "/",
                });
                setCookie(undefined, "qfinance.refreshToken", refresh_token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 dias
                    path: "/",
                });

                console.log(response.data);

                toast.dismiss(idToast);

                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                Router.push("/dashboard");
            })
            .catch((error) => {
                if (error.response?.data?.code === "creditials.invalid") {
                    toast.update(idToast, {
                        render: "E-mail ou senha incorreto!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                    throw new error();
                } else {
                    toast.update(idToast, {
                        render: "Ocorreu um erro, tente novamente mais tarde!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                    throw new error();
                }
            });
    }

    async function register({ name, email, password }: RegisterCredentials) {
        const idToast = toast.loading("Carregando...");

        await api
            .post("users", {
                name,
                email,
                password,
            })
            .then(async (response) => {
                const { token, refresh_token, user } = response.data;

                const isVip = user.is_Vip;
                const isAdmin = user.is_Admin;

                setUser({ name, email, isVip, isAdmin });

                setCookie(undefined, "qfinance.token", token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 dias
                    path: "/",
                });
                setCookie(undefined, "qfinance.refreshToken", refresh_token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 dias
                    path: "/",
                });

                toast.dismiss(idToast);

                Router.push("/signature");
            })
            .catch((error: AxiosError) => {
                if (error.message === "Network Error") {
                    toast.update(idToast, {
                        render: "Ocorreu um erro, tente novamente mais tarde!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                } else if (
                    error.response.data.error === "Users already exists!"
                ) {
                    toast.update(idToast, {
                        render: "E-mail já cadastrado!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                } else {
                    toast.update(idToast, {
                        render: "Ocorreu um erro, tente novamente mais tarde!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                }
            });

    }

    return (
        <AuthContext.Provider value={{ singIn, register, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
}
