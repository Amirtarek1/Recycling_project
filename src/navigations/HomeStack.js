import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import {
    Home_page,
    ServicesOil,
    Types_oil,

} from "../screens/Home/index_Home";

import { NavigationContainer } from "@react-navigation/native";
import TimeTablePage from "../screens/Home/TimeTablePage";


const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        // <NavigationContainer>
        <Stack.Navigator initialRouteName="Home_page">
            <Stack.Screen
                name="Home_page"
                component={Home_page}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ServicesOil"
                component={ServicesOil}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Types_oil"
                component={Types_oil}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TimeTablePage"
                component={TimeTablePage}
                options={{ headerShown: false }}
            />
            


        </Stack.Navigator>
        //  </NavigationContainer>
    );
};

export { HomeStack }