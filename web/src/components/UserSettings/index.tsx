
import { useState } from "react";
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
    PhoneContainer,
    SignatureContainer,
    ChangeSettingsContainer,
    AssignatureInfo,
    ChangeSettings
} from "./styles";
import { UpdateUserModal } from "./UpdateUserModal";

export interface UserSettingsProps {
    firstName: string;
    name: string;
    email: string;
    avatar: string;
    phone: string;
    expiresDate: string;
}

interface UserInfoProps {
    userInfo: UserSettingsProps
}

export function UserSettings({ userInfo }: UserInfoProps) {
    const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState(false)

    function handleOpenUpdateUserModal() {
        setIsUpdateUserModalOpen(true);
    }

    function handleCloseUpdateUserModal() {
        setIsUpdateUserModalOpen(false);
    }

    return userInfo ? (
        <>
            <Container>
                <Settings>
                    <AvatarContainer>
                        <Title>Perfil de usuário</Title>
                        <Title>{userInfo.firstName}</Title>
                        <Avatar>
                            {userInfo.avatar ? <AvatarImage src={userInfo.avatar} alt="User avatar image" /> : <AvatarIcon />}
                        </Avatar>
                        <ButtonChangeAvatar className="focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-zinc-900 focus:ring-brand-500">
                            Alterar
                        </ButtonChangeAvatar>
                    </AvatarContainer>

                    <SettingsContainer>
                        <SettingLabel>Nome:</SettingLabel>
                        <SettingPrimary><SettingPrimaryContent>{userInfo.name}</SettingPrimaryContent></SettingPrimary>

                        <SettingLabel>Email cadastrado:</SettingLabel>
                        <SettingPrimary><SettingPrimaryContent>{userInfo.email}</SettingPrimaryContent></SettingPrimary>

                        <SettignsSecundaryContainer>
                            <PhoneContainer>
                                <SettingLabel>Celular:</SettingLabel>
                                <SettingSecundary>
                                    {userInfo.phone ? userInfo.phone : "Não cadastrado"}
                                </SettingSecundary>
                            </PhoneContainer>

                            <SignatureContainer>
                                <SettingLabel>Plano:</SettingLabel>
                                <SettingSecundary>Anual</SettingSecundary>
                            </SignatureContainer>
                        </SettignsSecundaryContainer>
                    </SettingsContainer>
                </Settings>

                <ChangeSettingsContainer>
                    <AssignatureInfo>Seu plano expira em: {userInfo.expiresDate}</AssignatureInfo>

                    <ChangeSettings
                        className="focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-zinc-900 focus:ring-brand-500"
                        onClick={() => handleOpenUpdateUserModal()}
                    >
                        Alterar Configurações
                    </ChangeSettings>
                </ChangeSettingsContainer>
            </Container>

            <UpdateUserModal
                isOpen={isUpdateUserModalOpen}
                onRequestClose={handleCloseUpdateUserModal}
                user={userInfo}
            />
        </>
    ) : (
        <Container>
            <Settings></Settings>
        </Container>
    );
}


