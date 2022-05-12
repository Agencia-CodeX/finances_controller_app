/* eslint-disable consistent-return */
/* eslint-disable dot-notation */
import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../context/AuthContext";
import { AuthTokenError } from "../errors/AuthTokenError";


let isRefreshing = false;
let failedRequestQueue = [];

export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: "http://localhost:3333",
    });

    api.defaults.headers["Authorization"] = `Bearer ${cookies["qfinance.token"]}`;

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error: AxiosError) => {
            if (error.response.status === 401) {
                if (error.response?.data.error === "Invalid token!") {
                    cookies = parseCookies(ctx);

                    const { "qfinance.refreshToken": refreshToken } = cookies;
                    const originalConfig = error.config;

                    if (!isRefreshing) {
                        isRefreshing = true;

                        api.post("refresh-token", {
                            refresh_token: refreshToken,
                        })
                            .then((response) => {
                                const { token } = response.data;

                                setCookie(ctx, "qfinance.token", token, {
                                    maxAge: 60 * 60 * 24 * 30, // 30 dias
                                    path: "/",
                                });

                                setCookie(
                                    ctx,
                                    "qfinance.refreshToken",
                                    response.data.refresh_token,
                                    {
                                        maxAge: 60 * 60 * 24 * 30, // 30 dias
                                        path: "/",
                                    }
                                );

                                api.defaults.headers[
                                    "Authorization"
                                ] = `Bearer ${cookies["qfinance.token"]}`;

                                failedRequestQueue.forEach((request) =>
                                    request.onSuccess(token)
                                );
                                failedRequestQueue = [];
                            })
                            .catch((err) => {
                                failedRequestQueue.forEach((request) =>
                                    request.onFailure(err)
                                );
                                failedRequestQueue = [];

                                if (typeof window !== 'undefined') {
                                    signOut()
                                }
                            })
                            .finally(() => {
                                isRefreshing = false;
                            });
                    }

                    return new Promise((resolve, reject) => {
                        failedRequestQueue.push({
                            onSuccess: (token: string) => {
                                originalConfig.headers[
                                    "Authorization"
                                ] = `Baerer ${token}`;

                                resolve(api(originalConfig));
                            },
                            onFailure: (err: AxiosError) => {
                                reject(err);
                            },
                        });
                    });
                }
                else {
                    if (typeof window !== 'undefined') {
                        signOut()
                    } else {
                        return Promise.reject(new AuthTokenError())
                    }
                }
            }

            return Promise.reject(error);
        }
    );
    return api;
}