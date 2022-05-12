import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { setupAPIClient } from "../../service/api";

import {
    AnnumContainer,
    AppImg,
    Button,
    ButtonContainer,
    ButtonSubscription,
    CodeXLogo,
    CodeXLogoMinimalist,
    Container,
    Content,
    ContentSubscription,
    Details,
    DetailSubscription,
    Footer,
    FreeContainer,
    Icon,
    ImgContainer,
    ListDetails,
    Logo,
    Logout,
    MainBackground,
    MonthlyContainer,
    StoresContainer,
    SubscriptionContainer,
    Text,
    TextFooter,
    Title,
    TitleContainer,
    TitleSubscription,
    ValueSubscription
} from "./styles";

import { WithSSRAuthNotVip } from "../../utils/withSSRAuthNotVip";

interface ISignatureProps {
    user: {
        name: string;
        email: string;
    }
}

export default function Singnature({ user }: ISignatureProps) {
    const { signOut } = useContext(AuthContext)

    useEffect(() => {
        toast.success(`Boas vindas ${user.name}!`)
    }, []);

    return (
        <MainBackground>
            <Content>
                <Container>
                    <Logout>
                        <Button onClick={signOut}>
                            <Icon src="images/logout-icon.svg" /> Desconectar
                        </Button>
                    </Logout>
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
                    <CodeXLogo src="images/codex-logo.svg" />
                </Container>

                <SubscriptionContainer>
                    <FreeContainer>
                        <TitleContainer>
                            <TitleSubscription>Grátis</TitleSubscription>
                        </TitleContainer>

                        <ContentSubscription>
                            <Details>
                                <ValueSubscription>R$ 0,00</ValueSubscription>

                                <ListDetails>
                                    <ul>
                                        <li><DetailSubscription>Gastos definidos por classificações (casa, alimentação, luxo etc)</DetailSubscription></li>
                                        <li><DetailSubscription disabled>Controle dos gastos com alertas de positivo, negativo e próximo do limite pré estabelecido</DetailSubscription></li>
                                        <li><DetailSubscription disabled>Opção do usuário adicionar nova classificação</DetailSubscription></li>
                                    </ul>
                                </ListDetails>
                            </Details>

                            <ButtonContainer>
                                <ButtonSubscription btnStyle="free">Somente no App</ButtonSubscription>
                            </ButtonContainer>
                        </ContentSubscription>
                    </FreeContainer>
                    <MonthlyContainer>
                        <TitleContainer>
                            <TitleSubscription>Premium Mensal</TitleSubscription>
                        </TitleContainer>

                        <ContentSubscription>
                            <Details>
                                <ValueSubscription>R$ 10,00</ValueSubscription>

                                <ListDetails>
                                    <ul>
                                        <li><DetailSubscription>Gastos definidos por classificações (casa, alimentação, luxo etc)</DetailSubscription></li>
                                        <li><DetailSubscription>Controle dos gastos com alertas de positivo, negativo e próximo do limite pré estabelecido</DetailSubscription></li>
                                        <li><DetailSubscription>Opção do usuário adicionar nova classificação</DetailSubscription></li>
                                        <li><DetailSubscription disabled>12 meses pelo valor de 5 (de R$ 120,00 por R$ 50,00)</DetailSubscription></li>
                                    </ul>
                                </ListDetails>
                            </Details>

                            <ButtonContainer>
                                <ButtonSubscription btnStyle="monthly">Assinar</ButtonSubscription>
                            </ButtonContainer>
                        </ContentSubscription>
                    </MonthlyContainer>
                    <AnnumContainer>
                        <TitleContainer>
                            <TitleSubscription>Premium Anual</TitleSubscription>
                        </TitleContainer>

                        <ContentSubscription>
                            <Details>
                                <ValueSubscription>R$ 50,00</ValueSubscription>

                                <ListDetails>
                                    <ul>
                                        <li><DetailSubscription>Gastos definidos por classificações (casa, alimentação, luxo etc)</DetailSubscription></li>
                                        <li><DetailSubscription>Controle dos gastos com alertas de positivo, negativo e próximo do limite pré estabelecido</DetailSubscription></li>
                                        <li><DetailSubscription>Opção do usuário adicionar nova classificação</DetailSubscription></li>
                                        <li><DetailSubscription>12 meses pelo valor de 5 (de R$ 120,00 por R$ 50,00)</DetailSubscription></li>
                                    </ul>
                                </ListDetails>
                            </Details>

                            <ButtonContainer>
                                <ButtonSubscription btnStyle="annum">Assinar</ButtonSubscription>
                            </ButtonContainer>
                        </ContentSubscription>
                    </AnnumContainer>
                </SubscriptionContainer>

                <Footer>
                    <CodeXLogoMinimalist src="images/codex-logo-minimalist.svg" />
                    <TextFooter>© 2022 The CodeX Company, all rights reserved</TextFooter>
                </Footer>
            </Content>
        </MainBackground>
    );
}

export const getServerSideProps = WithSSRAuthNotVip(async (ctx) => {
    const apiClient = setupAPIClient(ctx)

    const user = await apiClient.get("/users/info").then((response) => response.data).catch((err) => console.log(err))

    return {
        props: {
            user
        }
    }
})