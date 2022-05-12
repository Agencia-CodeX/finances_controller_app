import styled from "styled-components";
import { CircleNotch } from "phosphor-react";

export const Container = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const Icon = styled(CircleNotch)`
    width: 1.5rem;
    height: 1.5rem;
    font-weight: bold;

    animation: spin 1s linear infinite;

    @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`;
