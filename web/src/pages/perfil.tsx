import { withSSRAuth } from "../utils/withSSRAuth";
import { MainBackground } from "../styles/dashboard";
import { SideMenu } from "../components/SideMenu";

export default function Perfil() {

    return (
        <MainBackground>
            <SideMenu itemActive="perfil" />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})