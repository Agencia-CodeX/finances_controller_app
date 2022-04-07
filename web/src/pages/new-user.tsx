import { useEffect } from "react";
import { toast } from "react-toastify";

export default function NewUser() {
    useEffect(() => {
        toast.success("Cadastro realizado com sucesso!");
        console.log("1");
    }, []);

    return <h1>Hello World!</h1>;
}
