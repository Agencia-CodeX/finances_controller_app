import {
    Container,
    Settings,
    AvatarContainer,
    Title,
    Avatar,
    AvatarImage,
    AvatarIcon,
    ButtonChangeAvatar,
    SettingsContainer,
    SettingLabel,
    SettingPrimary,
    SettingPrimaryContent,
    SettignsSecundaryContainer,
    SettingSecundary,
    CellContainer,
    SignatureContainer,
    ChangeSettingsContainer,
    AssignatureInfo,
    ChangeSettings
} from "./styles";

export interface UserSettingsProps {
    firstName: string;
    name: string;
    email: string;
    avatar: string;
    cell: string | null;
    expiresDate: string;
}

interface UserInfoProps {
    userInfo: UserSettingsProps
}

export function UserSettings({ userInfo }: UserInfoProps) {
    return (
        <Container>
            <Settings>
                <AvatarContainer>
                    <Title>Perfil de usuário</Title>
                    <Title>{userInfo?.firstName}</Title>
                    <Avatar>
                        {userInfo?.avatar ? <AvatarImage src={userInfo?.avatar} alt="User avatar image" /> : <AvatarIcon />}
                    </Avatar>
                    <ButtonChangeAvatar>Alterar</ButtonChangeAvatar>
                </AvatarContainer>

                <SettingsContainer>
                    <SettingLabel>Nome:</SettingLabel>
                    <SettingPrimary><SettingPrimaryContent>{userInfo?.name}</SettingPrimaryContent></SettingPrimary>

                    <SettingLabel>Email cadastrado:</SettingLabel>
                    <SettingPrimary><SettingPrimaryContent>{userInfo?.email}</SettingPrimaryContent></SettingPrimary>

                    <SettignsSecundaryContainer>
                        <CellContainer>
                            <SettingLabel>Celular:</SettingLabel>
                            <SettingSecundary>
                                {userInfo?.cell ? userInfo.cell : "Não cadastrado"}
                            </SettingSecundary>
                        </CellContainer>

                        <SignatureContainer>
                            <SettingLabel>Plano:</SettingLabel>
                            <SettingSecundary>Anual</SettingSecundary>
                        </SignatureContainer>
                    </SettignsSecundaryContainer>
                </SettingsContainer>
            </Settings>

            <ChangeSettingsContainer>
                <AssignatureInfo>Seu plano expira em: {userInfo?.expiresDate}</AssignatureInfo>

                <ChangeSettings>Alterar Configurações</ChangeSettings>
            </ChangeSettingsContainer>


        </Container>
    );
}