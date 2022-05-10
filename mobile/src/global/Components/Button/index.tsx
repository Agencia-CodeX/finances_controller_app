/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";

import { LinearBackgroundButton } from "../GradientButton";
import { Container, Title, Touchable } from "./styles";

interface ButtonProps {
    title: string;
    navegator?: () => void;
}

export function Button({ title, navegator }: ButtonProps) {
    return (
        <Container>
            <Touchable onPress={() => navegator && navegator()}>
                <LinearBackgroundButton>
                    <Title>{title}</Title>
                </LinearBackgroundButton>
            </Touchable>
        </Container>
    );
}
