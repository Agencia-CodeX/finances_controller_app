import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(10)}px 0;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
`;

export const Descricao = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.fontsColor};
    padding: 0 ${RFValue(15)}px 0 0;
`;

export const Icon = styled.TouchableOpacity`
    padding: 0 ${RFValue(0)}px;
`;

export const Primary = styled.View`
    width: ${RFValue(200)}px;
    padding: 0 0px 0 ${RFValue(10)}px;
`;

export const Secondary = styled.View`
    padding: ${RFValue(20)}px ${RFValue(0)}px 0 ${RFValue(0)}px;
`;

export const CategoriesIcons = styled(FontAwesome)`
    padding: ${RFValue(15)}px 0 0 0;
    width: ${RFValue(55)}px;
`;
