
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


import { StatusBar } from 'react-native';
import { COLORS } from '../constants';
import ShareTheGoodPage from '../screens/voluntary/ShareTheGoodPage';
import FoundationPage from '../screens/voluntary/FoundationPage';
import Donate from '../screens/voluntary/Donate';
import Voluntary_Archive from '../screens/voluntary/Voluntary_Archive';

const Stack = createStackNavigator();

function VoluntaryStack() {
    return (
        

        <>
         
            <Stack.Navigator initialRouteName="ShareTheGoodPage">
                <Stack.Screen
                    name="ShareTheGoodPage"
                    component={ShareTheGoodPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FoundationPage"
                    component={FoundationPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Donate"
                    component={Donate}
                    options={{ headerShown: false }}
                />
               
               <Stack.Screen
                    name="Voluntary_Archive"
                    component={Voluntary_Archive}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
          

        </>

        
    );
}

export default VoluntaryStack;