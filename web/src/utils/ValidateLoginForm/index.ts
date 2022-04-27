import { toast } from "react-toastify";

import { validateEmail } from "../ValidateEmails";

interface IValidateLoginFormProps {
    email: string;
    password: string;
}

export function ValidateLoginForm({
    email,
    password,
}: IValidateLoginFormProps): boolean {
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

    return false;
}
