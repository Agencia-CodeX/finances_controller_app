/* eslint-disable dot-notation */
/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosError } from "axios";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../service/api";

type SingInCredentials = {
    email: string;
    password: string;
};

type AuthContextData = {
    singIn(credentials: SingInCredentials): Promise<void>;
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
    isAdmin: boolean;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {
        const { "qfinance.token": token } = parseCookies();

        if (token) {
            api.get("/users/info")
                .then((response) => {
                    const { name, email, isVip, isAdmin } = response.data;
                    setUser({ name, email, isVip, isAdmin });
                })
                .catch((error: AxiosError) => {
                    console.log(error.response);
                });
        }
    }, []);

    async function singIn({ email, password }: SingInCredentials) {
        const idToast = toast.loading("Carregando...");

        await api
            .post("sessions", {
                Email: email,
                Password: password,
            })
            .then((response) => {
                console.log(response);
                const { token, Refresh_token, user } = response.data;

                const name = user.Name;
                const isVip = user.IsVip;
                const isAdmin = user.IsAdmin;

                setUser({ name, email, isVip, isAdmin });

                setCookie(undefined, "qfinance.token", token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 dias
                    path: "/",
                });
                setCookie(undefined, "qfinance.refreshToken", Refresh_token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 dias
                    path: "/",
                });

                console.log(response.data);

                toast.dismiss(idToast);

                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                if (!isVip) {
                    Router.push("/new-user");
                }
            })
            .catch((error) => {
                console.log(error.response);
                if (error.response?.data?.code === "creditials.invalid") {
                    toast.update(idToast, {
                        render: "E-mail ou senha incorreto!",
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
        <AuthContext.Provider value={{ singIn, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
}
