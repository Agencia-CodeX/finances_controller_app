import { withSSRAuth } from "../utils/withSSRAuth";
import { setupAPIClient } from "../service/api";
import { MainBackground } from "../styles/dashboard";
import { SideMenu } from "../components/SideMenu";

export default function Dashboard() {

    return (
        <MainBackground>
            <SideMenu />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx)

    const response = await apiClient.get("/users/info")

    console.log(response)

    return {
        props: {}
    }
})