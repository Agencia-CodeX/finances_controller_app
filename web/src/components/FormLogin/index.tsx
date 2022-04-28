import { FormEvent, useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { ValidateLoginForm } from "../../utils/ValidateLoginForm";
import { ContentForm, FormBox, LoginButton, RegisterButton } from "./styles";

export function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("");

    const { singIn } = useContext(AuthContext);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        const formLoginData = {
            email,
            password,
        };

        if (ValidateLoginForm(formLoginData)) {
            return;
        }

        try {
            await singIn(formLoginData);

            setEmail("");
            setPassaword("");
        } catch { }
    }

    return (
        <ContentForm>
            <form onSubmit={handleLogin}>
                <FormBox>
                    <h4>Login</h4>
                    <input
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(event) => setPassaword(event.target.value)}
                    />
                </FormBox>
                <LoginButton type="submit">Entrar</LoginButton>
            </form>

            <a href="/register">
                <RegisterButton type="button">Cadastrar-se</RegisterButton>
            </a>
            <img src="/images/codex_logo_mini.svg" alt="Codex Logo" />
        </ContentForm>
    );
}
