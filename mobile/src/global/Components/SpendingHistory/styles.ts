import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`;

export const Header = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
`;

export const SpendingCategories = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(20)}px 0 ${RFValue(20)}px ${RFValue(10)}px;
`;

export const Left = styled.View`
    width: 50%;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Right = styled.View`
    width: 50%;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Icons = styled(FontAwesome)`
    padding: ${RFValue(0)}px ${RFValue(0)}px 0 ${RFValue(0)}px;
    width: ${RFValue(55)}px;
`;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.negative};
    font-size: ${RFValue(16)}px;
`;

export const SumSpending = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.negative};
    font-size: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.fontsColor};
    font-size: ${RFValue(14)}px;
    padding: ${RFValue(15)}px ${RFValue(15)}px;
`;

export const Cash = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.negative};
    font-size: ${RFValue(15)}px;
`;

export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.fontsColor};
    font-size: ${RFValue(10)}px;
    opacity: 0.5;
`;
