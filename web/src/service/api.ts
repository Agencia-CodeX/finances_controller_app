/* eslint-disable consistent-return */
/* eslint-disable dot-notation */
import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { singOut } from "../context/AuthContext";

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestQueue = [];

export const api = axios.create({
    baseURL: "http://localhost:3333",
});

api.defaults.headers["Authorization"] = `Bearer ${cookies["qfinance.token"]}`;

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        console.log(error.response, api.defaults.headers["Authorization"])
        if (error.response.status === 401) {
            if (error.response?.data.error === "Invalid token!") {
                cookies = parseCookies();

                const { "qfinance.refreshToken": refreshToken } = cookies;
                const originalConfig = error.config;

                if (!isRefreshing) {
                    isRefreshing = true;

                    api.post("refresh-token", {
                        refreshToken,
                    })
                        .then((response) => {
                            const { token } = response.data;

                            setCookie(undefined, "qfinance.token", token, {
                                maxAge: 60 * 60 * 24 * 30, // 30 dias
                                path: "/",
                            });

                            setCookie(
                                undefined,
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
                singOut()
            }
        }

        return Promise.reject(error);
    }
);
