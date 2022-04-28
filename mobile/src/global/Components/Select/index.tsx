/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../styles/theme";
import { Container, Dropdown } from "./styles";

export function Select() {
    return (
        <Container>
            <Dropdown
                defaultValue="Mensalmente"
                options={[
                    "Diariamente",
                    "Semanalmente",
                    "Mensalmente",
                    "Anualmente",
                ]}
                textStyle={{
                    color: "white",
                    fontSize: RFValue(16),
                    fontWeight: "bold",
                    fontFamily: theme.fonts.bold,
                }}
                dropdownStyle={{
                    width: RFValue(180),
                    height: "auto",
                    borderRadius: RFValue(20),
                    padding: RFValue(15),
                    marginTop: Platform.OS === "ios" ? RFValue(20) : -2,
                    marginLeft: RFValue(-12),
                    fontSize: RFValue(16),
                }}
                dropdownTextStyle={{
                    fontSize: RFValue(16),
                }}
            />
        </Container>
    );
}
