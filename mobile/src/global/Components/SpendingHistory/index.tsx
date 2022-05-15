/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";

import {
    Container,
    Period,
    Header,
    SumSpending,
    SpendingCategories,
    Icons,
    Title,
    Left,
    Right,
    Cash,
    Date,
} from "./styles";

interface SpendingCategoriesProps {
    period: string;
    sumSpending: string;
    date?: string;
    cash?: string;
    type: "casa" | "lazer" | "luxos" | "outros" | "viagens" | "mecânico";
    title: string;
}

const icon = {
    casa: "home",
    lazer: "gamepad",
    luxos: "diamond",
    outros: "random",
    viagens: "plane",
    mecânico: "wrench",
};

export function SpendingHistory({
    type,
    title,
    period,
    sumSpending,
    date,
    cash,
}: SpendingCategoriesProps) {
    return (
        <Container>
            <Header>
                <Period>{period}</Period>
                <SumSpending>{sumSpending}</SumSpending>
            </Header>
            <SpendingCategories>
                <Left>
                    <Icons name={icon[type]} size={50} color="#CCCCCC" />
                    <Title>{title}</Title>
                </Left>
                <Right>
                    <Cash>{cash}</Cash>
                    <Date>{date}</Date>
                </Right>
            </SpendingCategories>
        </Container>
    );
}
