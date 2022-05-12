import Head from "next/head";

import { FormRegister } from "../../components/FormRegister";
import { Presentation } from "../../components/Presentation";
import { Content, MainBackground } from "./styles";
import { withSSRGuest } from "../../utils/withSSRGuest";

export default function Login() {
    return (
        <>
            <Head>
                <title>QFinance | Registro</title>
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


export const getServerSideProps = withSSRGuest(async (ctx) => {
    return {
        props: {}
    }
})