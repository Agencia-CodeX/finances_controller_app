/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";

import { Container, Icons, Home } from "./styles";

export function HomeIcon() {
    return (
        <Container>
            <Icons name="home" size={42} />
            <Home>Casa</Home>
        </Container>
    );
}
