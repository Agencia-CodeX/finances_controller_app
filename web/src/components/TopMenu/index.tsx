import { useEffect, useState } from "react";
import { api } from "../../service/apiClient";
import { SplitFirsWord } from "../../utils/SplitFirstWord";
import { Notifications } from "./Notifications";

import {
    Container,
    Greetings,
    Text,
    UserInfo,
    NickName,
    AvatarContainer,
    Avatar,
    AvatarIcon
} from "./styles"

interface UserInfoProps {
    name: string;
    avatar: string | null;
}

export function TopMenu() {
    const [userInfo, setUserInfo] = useState<UserInfoProps>(null);
    const [nickName, setNickName] = useState("");

    useEffect(() => {
        async function SearchUserInfo(): Promise<void> {
            await api.get("users/info")
                .then(response => {
                    const { name, avatar } = response.data;
                    setUserInfo({ name, avatar });
                    setNickName(SplitFirsWord(name));
                })
        }
        SearchUserInfo();
    }, []);

    return (
        <Container>
            <Greetings>
                <Text>Bem vindo novamente, {userInfo?.name}</Text>
            </Greetings>
            <UserInfo>
                <Notifications />
                <NickName>{nickName}</NickName>
                <AvatarContainer>
                    {userInfo?.avatar ? <Avatar src={userInfo?.avatar} /> : <AvatarIcon />}
                </AvatarContainer>
            </UserInfo>
        </Container>
    )
}
