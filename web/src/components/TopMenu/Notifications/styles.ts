import styled from "styled-components";
import { Bell } from "phosphor-react";

export const Button = styled.button`
    background: transparent;
    border: 0;
`;

export const Icon = styled(Bell)`
    width: 1.5rem;
    height: 1.5rem;
    font-weight: bold;
    color: var(--white)
`;