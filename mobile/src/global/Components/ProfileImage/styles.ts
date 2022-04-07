import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    margin-top: 30px;
    background: #c4c4c4;
    border-radius: ${RFValue(200)}px;
    align-items: center;
    justify-content: center;
`;

export const PerfilImage = styled.Image`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    border-radius: ${RFValue(200)}px;
`;
