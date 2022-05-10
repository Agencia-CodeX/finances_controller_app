/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";

import { Button } from "../../global/Components/Button";
import { Categories } from "../../global/Components/Categories";
import { GradientBackground } from "../../global/Components/GradientBackground";
import { HeaderNavigator } from "../../global/Components/HeaderNavigator";
import { Label } from "../../global/Components/LabelInput";
import { Select } from "../../global/Components/Select";
import {
    Container,
    Title,
    Header,
    BudgetInput,
    Content,
    Footer,
    CategoriesList,
} from "./styles";

export function ConfigurationsPage({ navigation }: any) {
    const [value, setValue] = useState<number | null>(0);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <GradientBackground />

                <Header>
                    <HeaderNavigator
                        title="Configurar gastos"
                        navegator={() => {
                            navigation.goBack();
                        }}
                    />
                    <Label title="Intervalo">
                        <Select />
                    </Label>

                    <Label title="Budget">
                        <BudgetInput
                            value={value}
                            onChangeValue={setValue}
                            prefix="R$ "
                            precision={2}
                            delimiter="."
                            separator=","
                            keyboardAppearance="light"
                            onChangeText={(formattedValue) => {
                                if (!formattedValue) {
                                    setValue(0);
                                }
                            }}
                        />
                    </Label>
                </Header>

                <Content>
                    <TouchableWithoutFeedback
                        onPress={() => Keyboard.dismiss()}
                    >
                        <Title>Defina as suas categorias de gastos:</Title>
                    </TouchableWithoutFeedback>
                    <CategoriesList>
                        <View onStartShouldSetResponder={() => true}>
                            <Categories
                                type="casa"
                                title="Casa"
                                descricao="Gastos referentes a manutenção/construção de sua casa"
                            />
                            <Categories
                                type="lazer"
                                title="Lazer"
                                descricao="Gastos referentes ao seu lazer e da sua família"
                            />
                            <Categories
                                type="luxos"
                                title="Luxos"
                                descricao="Gastos referentes a compras despensáveis"
                            />
                            <Categories
                                type="viagens"
                                title="Viagens"
                                descricao="Gastos referentes a viagens"
                            />
                            <Categories
                                type="mecânico"
                                title="Mecânico"
                                descricao="Gastos referentes a consertos no carro"
                            />
                            <Categories
                                type="outros"
                                title="Outros"
                                descricao="Crie a seu própria categoria de gasto aqui"
                            />
                        </View>
                    </CategoriesList>
                </Content>
                <Footer>
                    <Button
                        title="Salvar"
                        navegator={() => {
                            navigation.navigate("MyConfigurationsFilled");
                        }}
                    />
                </Footer>
            </Container>
        </TouchableWithoutFeedback>
    );
}
