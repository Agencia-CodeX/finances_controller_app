import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>QFinance</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                closeOnClick
                pauseOnHover
            />
        </>
    );
}

export default MyApp;
