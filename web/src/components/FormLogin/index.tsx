import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { validateEmail } from "../../utils/ValidateEmails";
import { ContentForm, FormBox, LoginButton, RegisterButton } from "./styles";

export function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("");

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        if (!email) {
            toast.error("Digite seu E-mail!");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("E-mail inválido!");
            return;
        }

        if (!password) {
            toast.error("Digite sua senha");
            return;
        }

        console.log(email, password);

        setEmail("");
        setPassaword("");
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
