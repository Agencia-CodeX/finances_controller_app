import React from "react";

import { Container, Joystick, Icon } from "./styles";

export function JoystickIcon() {
    return (
        <Container>
            <Icon name="sports-esports" size={40} />
            <Joystick>Lazer</Joystick>
        </Container>
    );
}
