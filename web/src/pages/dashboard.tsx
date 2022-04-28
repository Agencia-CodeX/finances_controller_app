import { withSSRAuth } from "../utils/withSSRAuth";
import { api } from "../service/apiClient";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { setupAPIClient } from "../service/api";

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        api.get("users/info").then(response => console.log(response))
    })

    return <h1>Hello Assinante! {user.name}</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx)
    const response = await apiClient.get("/users/info")

    console.log(response.data)

    return {
        props: {}
    }
})