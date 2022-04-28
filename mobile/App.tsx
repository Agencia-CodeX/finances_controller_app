/* eslint-disable react/style-prop-object */
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { ConfigurationsPage } from "./src/pages/ConfigurationsPage";
import { Login } from "./src/pages/Login";
import { MyConfigurationsFilled } from "./src/pages/MyConfigurationsFilled";
import { MyConfigurations } from "./src/pages/MyConfigurationsPage";
import { Register } from "./src/pages/Register";
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
            <StatusBar style="light" />
            <ConfigurationsPage />
        </ThemeProvider>
    );
}
