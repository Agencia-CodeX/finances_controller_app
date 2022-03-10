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
`;

export const Header = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(36)}px;
  margin: ${Platform.OS === "android" ? 55 : getStatusBarHeight() + 30}px 0px
    0px ${RFValue(25)}px;
  position: absolute;
`;

export const AppTitle = styled.Text`
  color: ${({ theme }) => theme.colors.fontsColor};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.fontsColor};
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Footer = styled.View`
  width: 321px;
  height: 190px;
  position: absolute;
  bottom: 65px;
  margin-left: 25px;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Gradient = styled.ImageBackground`
  flex: 1;
`;
