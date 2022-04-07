/* eslint-disable import/no-unresolved */
import React from "react";

import QFinanceLogo from "../../../assets/qfinanceLogo.svg";
import { Logo } from "./styles";

export function HeaderLogo() {
    return (
        <Logo>
            <QFinanceLogo />
        </Logo>
    );
}
