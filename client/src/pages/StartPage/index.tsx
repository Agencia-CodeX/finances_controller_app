/* eslint-disable global-require */
import React from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { RadialBackgroundButton } from "../../global/Components/GradientButton";
import {
  Container,
  Header,
  Title,
  Footer,
  CardsImage,
  StartButton,
  TextButton,
  Logo,
  SignInText,
  Link,
  BottomTexts,
} from "./styles";

export function StartPage() {
  return (
    <>
      <Container>
        <GradientBackground />
        <Header>
          <Logo source={require("../../assets/qfinanceLogo.png")} />
        </Header>
        <CardsImage source={require("../../assets/cards.png")} />
        <Footer>
          <Title>Tome o controle das suas finanças!</Title>

          <StartButton>
            <RadialBackgroundButton>
              <TextButton>Começe agora!</TextButton>
            </RadialBackgroundButton>
          </StartButton>

          <BottomTexts>
            <SignInText>Já possui uma conta? </SignInText>
            <Link>Entre aqui</Link>
          </BottomTexts>
        </Footer>
      </Container>
    </>
  );
}
