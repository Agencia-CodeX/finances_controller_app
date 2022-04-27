/* eslint-disable dot-notation */
import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();

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
            if (error.response.data?.code === "token.expired") {
                console.log("Oi");
            }
        }
    }
);
