/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";

import { Container, Icons, Dice } from "./styles";

export function DiceIcon() {
    return (
        <Container>
            <Icons name="dice" size={32} />
            <Dice>Outros</Dice>
        </Container>
    );
}
