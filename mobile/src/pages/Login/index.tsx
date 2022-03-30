import React from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { LinearBackgroundButton } from "../../global/Components/GradientButton";
import { HeaderLogo } from "../../global/Components/Logo";
import {
  Container,
  Header,
  LoginForm,
  TitleForm,
  Input,
  Form,
  LoginButton,
  TextButton,
} from "./styles";

export function Login() {
  return (
    <Container>
      <GradientBackground />
      <Header>
        <HeaderLogo />
      </Header>
      <Form>
        <LoginForm>
          <TitleForm>Login</TitleForm>
          <Input placeholder="Email"></Input>
          <Input placeholder="Senha" secureTextEntry={true}></Input>
        </LoginForm>
        <LoginButton>
          <LinearBackgroundButton>
            <TextButton>Entrar</TextButton>
          </LinearBackgroundButton>
        </LoginButton>
      </Form>
    </Container>
  );
}
