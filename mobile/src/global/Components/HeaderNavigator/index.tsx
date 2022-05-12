/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

import React from "react";

import { Container, Title, Icon, Back, Right } from "./styles";

interface HeaderNavigatorProps {
    title: string;
    navegator: () => void;
}

export function HeaderNavigator({ title, navegator }: HeaderNavigatorProps) {
    return (
        <Container>
            <Back onPress={() => navegator()}>
                <Icon name="arrow-left" size={20} color="white" />
            </Back>
            <Title>{title}</Title>
            <Right />
        </Container>
    );
}
