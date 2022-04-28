/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import {
    Container,
    Title,
    Descricao,
    Primary,
    Icon,
    Secondary,
    CategoriesIcons,
} from "./styles";

interface CategoriesProps {
    type: "casa" | "lazer" | "luxos" | "outros" | "viagens" | "mecânico";
    title: string;
    descricao: string;
}

const icon = {
    casa: "home",
    lazer: "gamepad",
    luxos: "diamond",
    outros: "random",
    viagens: "plane",
    mecânico: "wrench",
};

export function Categories({ title, descricao, type }: CategoriesProps) {
    const [iconName, setIconName] = useState(false);

    return (
        <Container>
            <CategoriesIcons name={icon[type]} size={45} color="#CCCCCC" />
            <Primary>
                <Title>{title}</Title>
                <Descricao>{descricao}</Descricao>
            </Primary>
            <Secondary>
                <Icon
                    onPress={() => {
                        if (!iconName) {
                            setIconName(true);
                        }
                        if (iconName) {
                            setIconName(false);
                        }
                    }}
                >
                    <Ionicons
                        name={iconName ? "checkmark-circle" : "add-circle"}
                        color="white"
                        size={RFValue(35)}
                    />
                </Icon>
            </Secondary>
        </Container>
    );
}
