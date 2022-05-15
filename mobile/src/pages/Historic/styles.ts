import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Header = styled.View`
    align-items: center;
    position: absolute;
    top: ${RFValue(40)}px;
    text-align: center;
    width: 100%;
    justify-content: space-between;
`;

export const Main = styled.View`
    width: 100%;
    margin-top: ${RFValue(100)}px;
    padding: ${RFValue(20)}px;
`;
