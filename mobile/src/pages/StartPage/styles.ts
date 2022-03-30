import { Platform } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
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
  width: ${RFValue(120)}px;
  height: ${RFValue(36)}px;
  margin: ${Platform.OS === "android" ? 55 : getStatusBarHeight() + 30}px 0px
    0px ${RFValue(25)}px;
  position: absolute;
`;

export const AppTitle = styled.Image`
  color: ${({ theme }) => theme.colors.fontsColor};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.fontsColor};
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Footer = styled.View`
  width: 100%;
  height: 190px;
  position: absolute;
  bottom: 30px;
  margin-bottom: ${getBottomSpace()}px;
  padding: 0 ${RFValue(25)}px;
`;

export const Gradient = styled.ImageBackground`
  flex: 1;
`;

export const CardsImage = styled.Image`
  position: absolute;
  right: 0px;
  top: -5px;
`;

export const StartButton = styled.TouchableOpacity`
  height: 60px;
  border-radius: 18px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.fontsColor};
`;

export const SignInText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.fontsColor};
  margin-top: 10px;
  opacity: 0.4;
`;

export const Link = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.fontsColor};
  margin-top: 10px;
`;

export const BottomTexts = styled.View`
  flex-direction: row;
`;
