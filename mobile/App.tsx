/* eslint-disable react/style-prop-object */
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { ConfigurationsPage } from "./src/pages/ConfigurationsPage";
import { Historic } from "./src/pages/Historic";
import { Login } from "./src/pages/Login";
import { MyConfigurationsFilled } from "./src/pages/MyConfigurationsFilled";
import { MyConfigurations } from "./src/pages/MyConfigurationsPage";
import { Register } from "./src/pages/Register";
import { Splash } from "./src/pages/Splash";
import { StartPage } from "./src/pages/StartPage";

const Stack = createNativeStackNavigator();

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
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="StartPage"
                        component={StartPage}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MyConfigurations"
                        component={MyConfigurations}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MyConfigurationsFilled"
                        component={MyConfigurationsFilled}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Configurations"
                        component={ConfigurationsPage}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Histórico"
                        component={Historic}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
