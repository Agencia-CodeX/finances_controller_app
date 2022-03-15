import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { Splash } from "./src/pages/Splash";
import { StartPage } from "./src/pages/StartPage";

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  );
}
