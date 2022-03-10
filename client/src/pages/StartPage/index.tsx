/* eslint-disable global-require */
import React from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { Container, Header, AppTitle, Title, Footer } from "./styles";

export function StartPage() {
  return (
    <Container>
      <GradientBackground />
      <Header>
        <AppTitle>QFinance.</AppTitle>
      </Header>
      <Footer>
        <Title>Tome o controle das suas finanças!</Title>
      </Footer>
    </Container>
  );
}
