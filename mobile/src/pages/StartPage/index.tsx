/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable global-require */
import React from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { LinearBackgroundButton } from "../../global/Components/GradientButton";
import { HeaderLogo } from "../../global/Components/Logo";
import {
    Container,
    Header,
    Title,
    Footer,
    CardsImage,
    StartButton,
    TextButton,
    SignInText,
    Link,
    BottomTexts,
} from "./styles";

export function StartPage() {
    return (
        <Container>
            <GradientBackground />
            <Header>
                <HeaderLogo />
            </Header>
            <CardsImage source={require("../../assets/cards.png")} />
            <Footer>
                <Title>Tome o controle das suas finanças!</Title>

                <StartButton>
                    <LinearBackgroundButton>
                        <TextButton>Começe agora!</TextButton>
                    </LinearBackgroundButton>
                </StartButton>

                <BottomTexts>
                    <SignInText>Já possui uma conta? </SignInText>
                    <Link>Entre aqui</Link>
                </BottomTexts>
            </Footer>
        </Container>
    );
}
