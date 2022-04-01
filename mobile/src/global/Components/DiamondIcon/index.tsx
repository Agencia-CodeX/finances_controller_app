/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";

import { Container, Icons, Diamond } from "./styles";

export function DiamondIcon() {
    return (
        <Container>
            <Icons name="diamond" size={36} />
            <Diamond>Luxo</Diamond>
        </Container>
    );
}
