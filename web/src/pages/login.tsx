import Head from "next/head";

import { FormLogin } from "../components/FormLogin";
import { Presentation } from "../components/Presentation";
import { Content, MainBackground } from "../styles/login-register";

export default function Login() {
    console.log("1");
    return (
        <>
            <Head>
                <title>QFinance | Login</title>
            </Head>
            <MainBackground>
                <Content>
                    <Presentation />
                    <FormLogin />
                </Content>
            </MainBackground>
        </>
    );
}
