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

                    <Input placeholder="Nome" />
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Input placeholder="Confirmar Senha" secureTextEntry />
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
