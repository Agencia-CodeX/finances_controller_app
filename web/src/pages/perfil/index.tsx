import { withSSRAuth } from "../../utils/withSSRAuth";
import { MainBackground } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { TopMenu } from "../../components/TopMenu";

export default function Perfil() {

    return (
        <MainBackground>
            <SideMenu itemActive="perfil" />
            <TopMenu />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})