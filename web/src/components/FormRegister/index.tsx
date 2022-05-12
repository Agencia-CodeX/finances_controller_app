import { FormEvent, useContext, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AuthContext } from "../../context/AuthContext";
import { capitalizeFirstLetters } from "../../utils/CapitalizeFirtsLetters";

import { ValidateRegisterForm } from "../../utils/ValidateRegisterForm";
import { Loading } from "../Loading";
import { ContentForm, FormBox, RegisterButton, ReturnButton } from "./styles";

export function FormRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassroword] = useState("");
    const [isLoading, setLoading] = useState(false);

    const { register } = useContext(AuthContext)

    async function handleRegister(event: FormEvent) {
        event.preventDefault();
        setLoading(true)

        const formRegisterData = { name, email, password, confirmPassword };

        if (ValidateRegisterForm(formRegisterData)) {
            setLoading(false)
            return;
        }

        const newName = capitalizeFirstLetters(name);
        setName(newName);

        try {
            await register({ name, email, password });
            setLoading(false)

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassroword("");
        } catch {
            setLoading(false)
        }
    }

    return (
        <ContentForm>
            <form onSubmit={handleRegister}>
                <FormBox>
                    <h4>Cadastro</h4>
                    <input
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50"
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
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
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50"
                        type="password"
                        placeholder="Confirmar Senha"
                        value={confirmPassword}
                        onChange={(event) =>
                            setConfirmPassroword(event.target.value)
                        }
                    />
                </FormBox>
                <RegisterButton
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50"
                    type="submit"
                >
                    {isLoading ? <Loading /> : "Cadastrar"}
                </RegisterButton>
            </form>

            <ReturnButton>
                <a href="/login" className="flex gap-2 mt-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-50">
                    <HiOutlineArrowNarrowLeft /> Voltar
                </a>
            </ReturnButton>
            <img src="/images/codex_logo_mini.svg" alt="Codex Logo" />
        </ContentForm>
    );
}
