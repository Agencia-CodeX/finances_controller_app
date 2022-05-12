import { withSSRAuth } from "../../utils/withSSRAuth";
import { MainBackground } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { TopMenu } from "../../components/TopMenu";

export default function Configuracoes() {

    return (
        <MainBackground>
            <SideMenu itemActive="configuracoes" />
            <TopMenu />
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})