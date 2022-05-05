import Head from "next/head";

import { FormLogin } from "../components/FormLogin";
import { Presentation } from "../components/Presentation";
import { Content, MainBackground } from "../styles/login-register";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Login() {
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


export const getServerSideProps = withSSRGuest(async (ctx) => {
    return {
        props: {}
    }
})