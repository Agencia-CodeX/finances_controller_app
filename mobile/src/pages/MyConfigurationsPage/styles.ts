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

export const Button = styled.TouchableOpacity`
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(18)}px;
    top: ${RFValue(90)}px;
    margin-top: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
    font-size: ${RFValue(15)}px;
    margin: 0;
    padding: 0;
`;

export const Header = styled.View`
    align-items: center;
    position: absolute;
    top: ${RFValue(50)}px;
    text-align: center;
    width: 100%;
`;

export const Profile = styled.View`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    margin-top: 30px;
    background: #c4c4c4;
    border-radius: ${RFValue(200)}px;
    align-items: center;
    justify-content: center;
`;

export const ProfileIcon = styled(FontAwesome5)``;

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
    margin: ${RFValue(37)}px ${RFValue(25)}px;
    height: ${RFValue(77)}px;
    padding: 0px ${RFValue(34)}px 0px ${RFValue(34)}px;
    border-radius: 19px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icons = styled(EvilIcons)`
    margin-right: 40px;
    color: #c4c4c4;
`;

export const Footer = styled.View`
    width: 100%;
    height: 190px;
    position: absolute;
    bottom: 30px;
    margin-bottom: ${getBottomSpace()}px;
    padding: 0 ${RFValue(25)}px;
`;
