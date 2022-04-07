import axios from "axios";

export const api = axios.create({
    baseURL: "http://127.0.0.1:3333/",
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "content-type": "application/json",
    },
});
