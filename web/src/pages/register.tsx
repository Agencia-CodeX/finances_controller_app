import Head from "next/head";

import { FormRegister } from "../components/FormRegister";
import { Presentation } from "../components/Presentation";
import { Content, MainBackground } from "../styles/login-register";

export default function Login() {
    return (
        <>
            <Head>
                <title>QFinance | Login</title>
            </Head>
            <MainBackground>
                <Content>
                    <Presentation />
                    <FormRegister />
                </Content>
            </MainBackground>
        </>
    );
}
