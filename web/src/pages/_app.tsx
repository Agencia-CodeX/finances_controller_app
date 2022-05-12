import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/AuthContext";
import { GlobalStyle } from "../styles/global";

import "../styles/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Head>
                <title>QFinance</title>
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                closeOnClick
                pauseOnHover
            />
            <GlobalStyle />
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
