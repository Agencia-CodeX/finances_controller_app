/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { HeaderNavigator } from "../../global/Components/HeaderNavigator";
import { SpendingHistory } from "../../global/Components/SpendingHistory";
import { Container, Header, Main } from "./styles";

export function Historic({ navigation }: any) {
    return (
        <Container>
            <Header>
                <HeaderNavigator
                    title="Histórico"
                    navegator={() => {
                        navigation.goBack();
                    }}
                />
            </Header>
            <Main>
                <SpendingHistory
                    period="Janeiro 2022"
                    sumSpending="-R$20,00"
                    type="casa"
                    title="Casa"
                    cash="-R$10,00"
                    date="13 jan 22"
                />
                <SpendingHistory
                    period="Fevereiro 2022"
                    sumSpending="-R$143,00"
                    type="lazer"
                    title="Lazer"
                    cash="-R$100,00"
                    date="1 fev 22"
                />
            </Main>
        </Container>
    );
}
