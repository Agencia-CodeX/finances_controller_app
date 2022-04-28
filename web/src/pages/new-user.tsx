import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";
import { api } from "../service/api";

export default function NewUser() {
    const { user } = useContext(AuthContext);



    useEffect(() => {
        api.get("/users/info")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            })
    }, []);

    return (
        <h1>Hello World! {user?.name}</h1>
    );
}
