import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Header = styled.View`
    width: ${RFValue(120)}px;
    height: ${RFValue(36)}px;
    margin: ${Platform.OS === "android" ? 55 : getStatusBarHeight() + 30}px 0px
        0px ${RFValue(25)}px;
    position: absolute;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const LoginForm = styled.View`
    border: 1px solid;
    border-radius: 19px;
    border-color: rgba(255, 255, 255, 0.17);
    width: 100%;
    top: ${RFValue(219)}px;
    align-items: center;
    padding: 20px;
`;

export const Form = styled.View`
    width: 100%;
    padding: 0 ${RFValue(25)}px;
    position: absolute;
`;

export const TitleForm = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
    font-size: ${RFValue(24)}px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "white",
})`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.fontsColor};
    font-size: ${RFValue(14)}px;
    width: 90%;
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.17);
    border-radius: 24px;
    padding: 15px;
    margin: 20px;
    background: rgba(255, 255, 255, 0.1);
`;

export const LoginButton = styled.TouchableOpacity`
    height: 60px;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(235)}px;
`;

export const TextButton = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
`;
