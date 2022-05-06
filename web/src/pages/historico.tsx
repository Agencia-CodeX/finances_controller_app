import { withSSRAuth } from "../utils/withSSRAuth";
import { MainBackground } from "../styles/dashboard";
import { SideMenu } from "../components/SideMenu";

export default function Historico() {

    return (
        <MainBackground>
            <SideMenu itemActive="historico" />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})