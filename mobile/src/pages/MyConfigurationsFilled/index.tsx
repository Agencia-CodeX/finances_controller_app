/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { DiamondIcon } from "../../global/Components/DiamondIcon";
import { DiceIcon } from "../../global/Components/DiceIcon";
import { GradientBackground } from "../../global/Components/GradientBackground";
import { LinearBackgroundButton } from "../../global/Components/GradientButton";
import { HeaderNavigator } from "../../global/Components/HeaderNavigator";
import { HomeIcon } from "../../global/Components/HomeIcon";
import { JoystickIcon } from "../../global/Components/JoystickIcon";
import { ProfileImage } from "../../global/Components/ProfileImage";
import {
    Container,
    Header,
    Title,
    AlterButton,
    Profile,
    AlterTextButton,
    ConfigButton,
    Icons,
    Main,
    TextButton,
    Intervalo,
    IntervaloData,
    Budget,
    BudgetData,
    Footer,
    Button,
    MyCategories,
    CardsIcons,
    ProfileInformations,
} from "./styles";

export function MyConfigurationsFilled({ navigation }: any) {
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
                <ProfileInformations>
                    <Profile>
                        <ProfileImage urlImage="https://media-exp1.licdn.com/dms/image/C5603AQEjKVPfTg2L0g/profile-displayphoto-shrink_200_200/0/1642122511131?e=1654128000&v=beta&t=ijZ83vtkA6122pI1AK8oEktWt-GKMVaZ9nQyhcpfkow" />
                        <AlterButton>
                            <AlterTextButton>Alterar</AlterTextButton>
                        </AlterButton>
                    </Profile>
                    <Title>Olá, Guilherme{"\n"}Veroneze</Title>
                </ProfileInformations>
            </Header>
            <Main>
                <ConfigButton>
                    <Icons name="gear" size={50} />
                    <TextButton>Configurar gastos</TextButton>
                </ConfigButton>
                <Intervalo>
                    <Title>Intervalo</Title>
                    <IntervaloData>Mensalmente</IntervaloData>
                </Intervalo>
                <Budget>
                    <Title>Budget</Title>
                    <BudgetData>R$ 2.000,00</BudgetData>
                </Budget>
                <MyCategories>
                    <Title>Suas categorias de gastos:</Title>
                    <CardsIcons>
                        <HomeIcon />
                        <JoystickIcon />
                    </CardsIcons>
                    <CardsIcons>
                        <DiamondIcon />
                        <DiceIcon />
                    </CardsIcons>
                </MyCategories>
            </Main>
            <Footer>
                <Button
                    onPress={() => {
                        navigation.navigate("Histórico");
                    }}
                >
                    <LinearBackgroundButton>
                        <TextButton>Ver histórico</TextButton>
                    </LinearBackgroundButton>
                </Button>
            </Footer>
        </Container>
    );
}
