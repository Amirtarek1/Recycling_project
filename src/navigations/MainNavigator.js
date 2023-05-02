import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import VoluntaryStack from "./VoluntaryStack";
import AnimTab2 from "../screens/Bottomtabs/AnimTab2";
import All_orders from "../screens/Profile/All_orders";
import Intro_slider from "../screens/Splash/Start_slider";
import Reoil from "../screens/Splash/ReOil_page";


const RootStack = createStackNavigator();

const MainNavigation = () => {
    return (

        <RootStack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
            <RootStack.Screen
                name="Splash"
                component={Reoil}
            />
            <RootStack.Screen
                name="Intro_slider"
                component={Intro_slider}
            />
            <RootStack.Screen
                name="Auth"
                component={AuthStack}
            />
            <RootStack.Screen
                name="Voluntary"
                component={VoluntaryStack}
            />
            <RootStack.Screen
                name="All_orders"
                component={All_orders}
            />

            <RootStack.Screen
                name="Home"
                component={AnimTab2}
            />

        </RootStack.Navigator>
    );
};
export { MainNavigation }