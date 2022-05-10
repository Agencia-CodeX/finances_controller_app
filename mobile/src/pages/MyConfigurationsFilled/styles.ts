import { FontAwesome5, EvilIcons } from "@expo/vector-icons";
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
    align-items: center;
    position: absolute;
    top: ${RFValue(40)}px;
    text-align: center;
    width: 100%;
    justify-content: space-between;
`;

export const Profile = styled.View`
    width: ${RFValue(120)}px;
    align-items: center;
    justify-content: center;
`;

export const ProfileIcon = styled(FontAwesome5)``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
    font-size: ${RFValue(15)}px;
    margin-top: 0;
    padding: 0;
`;

export const Content = styled.View`
    text-align: center;
    width: 100%;
    align-items: center;
    position: absolute;
`;

export const AlterButton = styled.TouchableOpacity`
    border: 1px solid rgba(255, 255, 255, 0.17);
    background: rgba(255, 255, 255, 0.1);
    margin-top: ${RFValue(10)}px;
    height: ${RFValue(30)}px;
    padding: 0 ${RFValue(15)}px;
    border-radius: ${RFValue(19)}px;
    justify-content: center;
`;

export const AlterTextButton = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
`;

export const ConfigButton = styled.TouchableOpacity`
    border: 1px solid rgba(255, 255, 255, 0.17);
    margin: ${RFValue(25)}px ${RFValue(25)}px;
    height: ${RFValue(77)}px;
    padding: 0px ${RFValue(34)}px 0px ${RFValue(34)}px;
    border-radius: ${RFValue(19)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icons = styled(EvilIcons)`
    margin-right: ${RFValue(40)}px;
    color: #c4c4c4;
`;

export const Main = styled.View`
    width: 100%;
    position: absolute;
    top: ${RFValue(260)}px;
`;

export const TextButton = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
`;

export const Intervalo = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${RFValue(40)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const IntervaloData = styled.Text`
    border: 1px solid rgba(255, 255, 255, 0.17);
    justify-content: center;
    border-radius: ${RFValue(20)}px;
    padding: 0px ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.fontsColor};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    text-align: center;
`;

export const Budget = styled.View`
    text-align: center;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${RFValue(40)}px;
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const BudgetData = styled.Text`
    border: 1px solid rgba(255, 255, 255, 0.17);
    justify-content: center;
    border-radius: ${RFValue(20)}px;
    padding: 0px ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.fontsColor};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
    width: 100%;
    position: absolute;
    bottom: ${RFValue(170)}px;
    margin-bottom: ${getBottomSpace()}px;
    padding: 0 ${RFValue(25)}px;
`;

export const Button = styled.TouchableOpacity`
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(18)}px;
    top: ${RFValue(150)}px;
    margin-top: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
`;

export const MyCategories = styled.View`
    width: 100%;
    margin-top: ${RFValue(15)}px;
    padding: 0 ${RFValue(25)}px;
`;

export const CardsIcons = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(15)}px ${RFValue(110)}px 0 ${RFValue(10)}px;
`;

export const ProfileInformations = styled.View`
    align-items: center;
    text-align: center;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${RFValue(45)}px;
`;
