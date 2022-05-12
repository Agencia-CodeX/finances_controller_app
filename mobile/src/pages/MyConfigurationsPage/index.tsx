/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { LinearBackgroundButton } from "../../global/Components/GradientButton";
import { HeaderNavigator } from "../../global/Components/HeaderNavigator";
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

export function MyConfigurations({ navigation }: any) {
    return (
        <Container>
            <GradientBackground />
            <Header>
                <HeaderNavigator
                    title="Configurações"
                    navegator={() => {
                        navigation.goBack();
                    }}
                />
                <Title>Boas vindas,</Title>
                <Title>Guilherme Veroneze</Title>
                <Profile>
                    <ProfileIcon name="user" size={70} color="#3B3736" />
                </Profile>
                <AlterButton>
                    <AlterTextButton>Alterar</AlterTextButton>
                </AlterButton>
                <ConfigButton
                    onPress={() => {
                        navigation.navigate("Configurations");
                    }}
                >
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
