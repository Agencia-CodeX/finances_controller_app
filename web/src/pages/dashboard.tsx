import { withSSRAuth } from "../utils/withSSRAuth";
import { MainBackground } from "../styles/dashboard";
import { SideMenu } from "../components/SideMenu";

export default function Dashboard() {

    return (
        <MainBackground>
            <SideMenu itemActive="dashboard" />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})