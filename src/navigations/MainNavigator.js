import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import ProfileStack from "./ProfileStack";
import { HomeStack } from "./HomeStack";
import VoluntaryStack from "./VoluntaryStack";
import AnimTab2 from "../screens/Bottomtabs/AnimTab2";


const RootStack = createStackNavigator();

const MainNavigation = () => {
    return (

        <RootStack.Navigator
            initialRouteName="Auth"
            screenOptions={{ headerShown: false }}
        >
            <RootStack.Screen
                name="Auth"
                component={AuthStack}

            />
            <RootStack.Screen
                name="Voluntary"
                component={VoluntaryStack}
            />
            <RootStack.Screen
                name="Home"
                component={AnimTab2}
            />

        </RootStack.Navigator>
    );
};
export { MainNavigation }