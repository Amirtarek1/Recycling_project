import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'react-native';

import AuthStack from "./AuthStack";
import VoluntaryStack from "./VoluntaryStack";
import AnimTab2 from "../screens/Bottomtabs/AnimTab2";
import All_orders from "../screens/Profile/All_orders";
import Intro_slider from "../screens/Splash/Start_slider";
import Reoil from "../screens/Splash/ReOil_page";
import CoponesStack from "./CoponesStack";
import ServicesOil from "../screens/Home/ServicesOil";
import MoneyStack from "./MoneyStack";
import { COLORS } from "../constants";


const RootStack = createStackNavigator();

const MainNavigation = () => {
    return (
        <>
            <StatusBar backgroundColor={COLORS.black} barStyle={'default'} />

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
                {/* CoponesStack */}
                <RootStack.Screen
                    name="CoponesStack"
                    component={CoponesStack}
                />
                <RootStack.Screen
                    name="MoneyStack"
                    component={MoneyStack}
                />
                <RootStack.Screen
                    name="ServicesOil"
                    component={ServicesOil}
                />
                <RootStack.Screen
                    name="Home"
                    component={AnimTab2}
                />

            </RootStack.Navigator>
        </>
    );
};
export { MainNavigation }