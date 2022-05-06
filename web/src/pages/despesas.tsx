import { withSSRAuth } from "../utils/withSSRAuth";
import { MainBackground } from "../styles/dashboard";
import { SideMenu } from "../components/SideMenu";

export default function Despesas() {

    return (
        <MainBackground>
            <SideMenu itemActive="despesas" />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})