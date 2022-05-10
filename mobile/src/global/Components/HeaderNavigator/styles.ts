import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-bottom: ${RFValue(20)}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.fontsColor};
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(Feather)`
    padding: 0 ${RFValue(10)}px;
`;

export const Back = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
`;

export const Right = styled.View`
    width: ${RFValue(40)}px;
`;
