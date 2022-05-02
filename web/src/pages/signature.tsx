import { GetStaticProps } from "next";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { setupAPIClient } from "../service/api";
import { AppImg, CodeXLogo, Container, Content, ImgContainer, Logo, MainBackground, StoresContainer, Text, Title } from "../styles/signature";

import { WithSSRAuthNotVip } from "../utils/withSSRAuthNotVip";

interface ISignatureProps {
    user: {
        name: string;
        email: string;
    }
}

export default function Singnature({ user }: ISignatureProps) {

    useEffect(() => {
        toast.success(`Boas vindas ${user.name}!`)
    }, []);

    return (
        <MainBackground>
            <Content>
                <Container>
                    <Logo src="images/logo.svg"></Logo>
                    <Title>Cadastro Concluído!</Title>
                    <Text>Agora você possui acesso ao plano Grátis no App com o email <strong>{user.email}</strong>.</Text>
                    <Text>Com nossa página na web é possível ser um membro premium!</Text>
                    <Text>Mais informações sobre o app e a versão premium abaixo.</Text>
                </Container>

                <Container>
                    <ImgContainer>
                        <AppImg src="images/img-app-1.svg" />
                        <AppImg src="images/img-app-2.svg" />
                    </ImgContainer>

                    <StoresContainer>

                    </StoresContainer>

                    <Text>Desenvolvido por:</Text>
                    <CodeXLogo src="images/codex-logo.png" />
                </Container>
            </Content>
        </MainBackground>
    );
}

export const getServerSideProps = WithSSRAuthNotVip(async (ctx) => {
    const apiClient = setupAPIClient(ctx)

    const user = await apiClient.get("/users/info").then((response) => response.data)

    return {
        props: {
            user
        }
    }
})