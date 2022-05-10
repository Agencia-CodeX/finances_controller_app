import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(15)}px;
    padding: 0 ${RFValue(25)}px;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.fontsColor};
`;
