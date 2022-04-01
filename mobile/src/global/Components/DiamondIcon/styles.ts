import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const Icons = styled(FontAwesome)`
    color: #cccccc;
`;

export const Diamond = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
    padding: ${RFValue(10)}px ${RFValue(15)}px;
`;
