import { FormEvent, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { toast } from "react-toastify";

import { validateEmail } from "../../utils/ValidateEmails";
import { ValidatePassaword } from "../../utils/ValidatePassword";
import { ValidateSpecialCharacters } from "../../utils/ValidateSpeciaCharacters";
import { ContentForm, FormBox, RegisterButton, ReturnButton } from "./styles";

export function FormRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassroword] = useState("");

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (!name) {
            toast.error("Digite seu Nome!");
            return;
        }

        if (!ValidateSpecialCharacters(name)) {
            toast.error("Nome não pode conter caracteres especiais!");
            return;
        }

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

        const ValidateStrongPassaword = ValidatePassaword(password);
        console.log(ValidateStrongPassaword);

        if (!ValidateStrongPassaword.result) {
            ValidateStrongPassaword.message.map((message) =>
                toast.error(message)
            );
            return;
        }

        if (!confirmPassword) {
            toast.error("Confirme sua senha!");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("As senhas não são iguais!");
            return;
        }

        console.log(name, email, password, confirmPassword);
        toast.success("Conta criada com sucesso!");

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassroword("");
    }

    return (
        <ContentForm>
            <form onSubmit={handleRegister}>
                <FormBox>
                    <h4>Cadastro</h4>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
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
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        value={confirmPassword}
                        onChange={(event) =>
                            setConfirmPassroword(event.target.value)
                        }
                    />
                </FormBox>
                <RegisterButton type="submit">Cadastrar</RegisterButton>
            </form>

            <ReturnButton>
                <a href="/login">
                    <HiOutlineArrowNarrowLeft /> Voltar
                </a>
            </ReturnButton>
            <img src="/images/codex_logo_mini.svg" alt="Codex Logo" />
        </ContentForm>
    );
}
