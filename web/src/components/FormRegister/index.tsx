import { verify } from "jsonwebtoken";
import Router from "next/router";
import { FormEvent, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { toast } from "react-toastify";

import { secret } from "../../env";
import { api } from "../../service/api";
import { ValidateRegisterForm } from "../../utils/ValidateRegisterForm";
import { ContentForm, FormBox, RegisterButton, ReturnButton } from "./styles";

export function FormRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassroword] = useState("");

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        const formRegisterData = { name, email, password, confirmPassword };

        if (ValidateRegisterForm(formRegisterData)) {
            return;
        }

        const idToast = toast.loading("Carregando...");

        await api
            .post("users", {
                Name: name,
                Email: email,
                Password: password,
            })
            .then(async (response) => {
                const { data } = response;

                console.log(data);

                toast.dismiss(idToast);

                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassroword("");

                // Router.push("/new-user");
            })
            .catch((error) => {
                if (error.message === "Network Error") {
                    toast.update(idToast, {
                        render: "Ocorreu um erro, tente novamente mais tarde!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                } else if (
                    error.response.data.error === "Users already exists!"
                ) {
                    toast.update(idToast, {
                        render: "E-mail já cadastrado!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                } else {
                    toast.update(idToast, {
                        render: "Ocorreu um erro, tente novamente mais tarde!",
                        type: "error",
                        isLoading: false,
                        autoClose: 5000,
                        closeOnClick: true,
                    });
                }
            });
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
