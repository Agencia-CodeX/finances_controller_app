import React from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { LinearBackgroundButton } from "../../global/Components/GradientButton";
import { HeaderLogo } from "../../global/Components/Logo";
import {
  Container,
  Header,
  Form,
  RegisterForm,
  TitleForm,
  Input,
  RegisterButton,
  TextButton,
} from "./styles";

export function Register() {
  return (
    <Container>
      <GradientBackground />
      <Header>
        <HeaderLogo />
      </Header>
      <Form>
        <RegisterForm>
          <TitleForm>Cadastro</TitleForm>

          <Input placeholder="Nome"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Senha" secureTextEntry={true}></Input>
          <Input placeholder="Confirmar Senha" secureTextEntry={true}></Input>
        </RegisterForm>
        <RegisterButton>
          <LinearBackgroundButton>
            <TextButton>Cadastrar-se</TextButton>
          </LinearBackgroundButton>
        </RegisterButton>
      </Form>
    </Container>
  );
}
