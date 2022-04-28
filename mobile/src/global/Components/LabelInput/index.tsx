/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode } from "react";

import { Text, Container } from "./styles";

interface IntervaloProps {
    title: string;
    children: ReactNode;
}

export function Label({ title, children }: IntervaloProps) {
    return (
        <Container>
            <Text>{title}</Text>
            {children}
        </Container>
    );
}
