/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
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

export function StartPage({ navigation }: any) {
    return (
        <Container>
            <GradientBackground />
            <Header>
                <HeaderLogo />
            </Header>
            <CardsImage source={require("../../assets/cards.png")} />
            <Footer>
                <Title>Tome o controle das suas finanças!</Title>

                <StartButton
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                >
                    <LinearBackgroundButton>
                        <TextButton>Começe agora!</TextButton>
                    </LinearBackgroundButton>
                </StartButton>

                <BottomTexts>
                    <SignInText>Já possui uma conta? </SignInText>
                    <Link
                        onPress={() => {
                            navigation.navigate("Login");
                        }}
                    >
                        Entre aqui
                    </Link>
                </BottomTexts>
            </Footer>
        </Container>
    );
}
