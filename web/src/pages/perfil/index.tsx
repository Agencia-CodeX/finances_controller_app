import { withSSRAuth } from "../../utils/withSSRAuth";
import { Content, MainBackground } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { TopMenu } from "../../components/TopMenu";
import { UserSettings, UserSettingsProps } from "../../components/UserSettings";
import { api } from "../../service/apiClient";
import { useEffect, useState } from "react";
import { SplitFirsWord } from "../../utils/SplitFirstWord";

export default function Perfil() {
    const [user, setUser] = useState<UserSettingsProps>();

    useEffect(() => {
        async function SearchUserInfo(): Promise<void> {
            await api.get("users/info")
                .then(response => {
                    const { name, email, avatar, phone, vip_expires_date } = response.data;
                    const user = {
                        firstName: SplitFirsWord(name),
                        name,
                        email,
                        avatar,
                        phone,
                        expiresDate: new Date(vip_expires_date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        }),
                    }
                    console.log(response.data)
                    setUser(user);
                })
            return;
        }
        SearchUserInfo();
    }, [])

    return (
        <MainBackground>
            <SideMenu itemActive="perfil" />
            <Content>
                <TopMenu />
                <UserSettings userInfo={user} />
            </Content>
        </MainBackground>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {
        }
    }
})