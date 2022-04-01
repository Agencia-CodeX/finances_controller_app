/* eslint-disable global-require */
import React from "react";

import { Gradient } from "./styles";

export function GradientBackground() {
    return <Gradient source={require("../../../assets/gradient.png")} />;
}
