/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode } from "react";

import { Container, BackgroundButton } from "./styles";

interface Props {
    children: ReactNode;
}

export function LinearBackgroundButton({ children }: Props) {
    return (
        <Container>
            <BackgroundButton
                colors={["#FF73F8", "#8714CE", "#FF739D"]}
                start={[1.3, 0]}
                end={[0.2, 3]}
                locations={[0.1, 0.2, 0.9]}
            >
                {children}
            </BackgroundButton>
        </Container>
    );
}
