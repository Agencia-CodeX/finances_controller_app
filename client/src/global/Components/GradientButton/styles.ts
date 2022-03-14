import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BackgroundButton = styled(LinearGradient)`
  height: 60px;
  width: ${RFValue(310)}px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;
