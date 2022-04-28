import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Touchable = styled.TouchableOpacity`
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(18)}px;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
`;
