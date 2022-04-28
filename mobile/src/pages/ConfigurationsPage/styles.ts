import { FakeCurrencyInput } from "react-native-currency-input";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const Header = styled.View`
    width: 100%;
    padding: 0 ${RFValue(25)}px;
    position: absolute;
    top: ${RFValue(80)}px;
`;

export const Intervalo = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Budget = styled.View`
    text-align: center;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(20)}px;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.fontsColor};
    font-size: ${RFValue(15)}px;

    margin-top: ${RFValue(10)}px;
    padding: 0;
`;

export const BudgetInput = styled(FakeCurrencyInput)`
    border: ${RFValue(1)}px solid rgba(255, 255, 255, 0.17);
    border-radius: ${RFValue(20)}px;
    height: ${RFValue(40)}px;
    width: ${RFValue(180)}px;
    color: ${({ theme }) => theme.colors.fontsColor};
    justify-content: center;
    font-size: ${RFValue(16)}px;
    padding: 0 ${RFValue(12)}px;
    bottom: ${RFValue(5)}px;

    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Content = styled.View`
    width: 100%;
    padding: ${RFValue(25)}px ${RFValue(0)}px;
    align-items: center;
    position: absolute;
    top: ${RFValue(170)}px;
`;

export const Footer = styled.View`
    width: 100%;
    height: ${RFValue(190)}px;
    position: absolute;
    top: ${RFValue(620)}px;
    margin-bottom: ${getBottomSpace()}px;
    padding: 0 ${RFValue(25)}px;
`;

export const CategoriesList = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: ${RFValue(15)}px;
    width: 100%;
    height: ${RFValue(350)}px;
    padding: 0 ${RFValue(25)}px;
`;
