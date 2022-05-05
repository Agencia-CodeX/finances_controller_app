import { toast } from "react-toastify";

import { validateEmail } from "../ValidateEmails";
import { ValidatePassaword } from "../ValidatePassword";
import { ValidateSpecialCharacters } from "../ValidateSpeciaCharacters";

interface IValidateRegisterFormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export function ValidateRegisterForm({
    name,
    email,
    password,
    confirmPassword,
}: IValidateRegisterFormProps): boolean {
    if (!name) {
        toast.error("Digite seu Nome!");
        return true;
    }

    if (!ValidateSpecialCharacters(name)) {
        toast.error("Nome não pode conter caracteres especiais!");
        return true;
    }

    if (!email) {
        toast.error("Digite seu E-mail!");
        return true;
    }

    if (!validateEmail(email)) {
        toast.error("E-mail inválido!");
        return true;
    }

    if (!password) {
        toast.error("Digite sua senha");
        return true;
    }

    const ValidateStrongPassaword = ValidatePassaword(password);

    if (!ValidateStrongPassaword.result) {
        ValidateStrongPassaword.message.map((message) => toast.error(message));
        return true;
    }

    if (!confirmPassword) {
        toast.error("Confirme sua senha!");
        return true;
    }

    if (password !== confirmPassword) {
        toast.error("As senhas não são iguais!");
        return true;
    }

    return false;
}
