/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";

import { LinearBackgroundButton } from "../GradientButton";
import { Container, Title, Touchable } from "./styles";

interface ButtonProps {
    title: string;
}

export function Button({ title }: ButtonProps) {
    return (
        <Container>
            <Touchable>
                <LinearBackgroundButton>
                    <Title>{title}</Title>
                </LinearBackgroundButton>
            </Touchable>
        </Container>
    );
}
