import React from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { LinearBackgroundButton } from "../../global/Components/GradientButton";
import {
    Container,
    Button,
    TextButton,
    Header,
    Title,
    Profile,
    ProfileIcon,
    AlterButton,
    AlterTextButton,
    ConfigButton,
    Icons,
    Footer,
} from "./styles";

export function MyConfigurations() {
    return (
        <Container>
            <GradientBackground />
            <Header>
                <Title>Boas vindas,</Title>
                <Title>Guilherme Veroneze</Title>
                <Profile>
                    <ProfileIcon name="user" size={70} color="#3B3736" />
                </Profile>
                <AlterButton>
                    <AlterTextButton>Alterar</AlterTextButton>
                </AlterButton>
                <ConfigButton>
                    <Icons name="gear" size={50} />
                    <TextButton>Configurar gastos</TextButton>
                </ConfigButton>
            </Header>
            <Footer>
                <Button>
                    <LinearBackgroundButton>
                        <TextButton>Sair</TextButton>
                    </LinearBackgroundButton>
                </Button>
            </Footer>
        </Container>
    );
}
