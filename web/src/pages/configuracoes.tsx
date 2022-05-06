import { withSSRAuth } from "../utils/withSSRAuth";
import { MainBackground } from "../styles/dashboard";
import { SideMenu } from "../components/SideMenu";

export default function Configuracoes() {

    return (
        <MainBackground>
            <SideMenu itemActive="configuracoes" />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})