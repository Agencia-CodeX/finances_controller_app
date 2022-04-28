import ModalDropdown from "react-native-modal-dropdown";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    border: ${RFValue(1)}px solid rgba(255, 255, 255, 0.17);
    border-radius: ${RFValue(20)}px;
    /*height: ${RFValue(40)}px;
    width: ${RFValue(180)}px;*/
    justify-content: center;
    padding: 0 ${RFValue(11)}px;
    bottom: ${RFValue(5)}px;
    width: ${RFValue(180)}px;
    height: ${RFValue(40)}px;
`;

export const Dropdown = styled(ModalDropdown)`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`;
