import Router from "next/router";
import { FormEvent, useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { ValidateLoginForm } from "../../utils/ValidateLoginForm";
import { Loading } from "../Loading";
import { ContentForm, FormBox, LoginButton, RegisterButton } from "./styles";

export function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("");
    const [isLoading, setLoading] = useState(false);

    const { singIn } = useContext(AuthContext);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        setLoading(true);

        const formLoginData = {
            email,
            password,
        };

        if (ValidateLoginForm(formLoginData)) {
            setLoading(false);
            return;
        }

        try {
            await singIn(formLoginData);
            setEmail("");
            setPassaword("");
        } catch {
            setLoading(false);
        }
    }

    return (
        <ContentForm>
            <form onSubmit={handleLogin}>
                <FormBox>
                    <h4>Login</h4>
                    <input
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50"
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(event) => setPassaword(event.target.value)}
                    />
                </FormBox>
                <LoginButton
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50"
                    type="submit"
                >
                    {isLoading ? <Loading /> : "Entrar"}
                </LoginButton>

            </form>

            <RegisterButton
                onClick={() => Router.push("/register")}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50"
                type="button"
            >
                Cadastrar-se
            </RegisterButton>

            <img src="/images/codex_logo_mini.svg" alt="Codex Logo" />
        </ContentForm >
    );
}
