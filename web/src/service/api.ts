/* eslint-disable dot-notation */
import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

let cookies = parseCookies();

export const api = axios.create({
    baseURL: "http://localhost:3333",
});

api.defaults.headers["Authorization"] = `Bearer ${cookies["qfinance.token"]}`;

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response.status === 401) {
            if (error.response?.data === "Invalid token!") {
                cookies = parseCookies();

                const { "qfinance.refreshToken": refreshToken } = cookies;

                api.post("refresh", {
                    refreshToken,
                }).then((response) => {
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
                });
            } else {
                // deslogar user
            }
        }
    }
);
