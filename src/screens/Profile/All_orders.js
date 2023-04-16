import { Text, View } from 'react-native';
import Back_arrow from '../../components/Back_arrow';
import { styles } from './Style_allOrders';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompleteOrders from "./CompleteOrders";
import Profile_list from './Profile_list';
import Tologin from '../Auth/Tologin';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../constants';
import UncompleteOrders from './UncompleteOrders';

const Stack = createMaterialTopTabNavigator();

function All_orders() {
  return (
    <>
      <SafeAreaView style={styles.Basic_container}>


        <View style={[styles.view_arrow_and_text_style]}>
          <Back_arrow onPress={() => navigation.goBack()} />

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[styles.text_Bold_style]}>طلباتي</Text>
          </View>

        </View>

      </SafeAreaView>

      <Stack.Navigator initialRouteName="مكتمله"
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: COLORS.green_mid },
          tabBarStyle: { backgroundColor: COLORS.white   },


          tabBarLabelStyle: {
            
            fontSize: RFPercentage(2.5),
            fontFamily: FONT.font_Almarai_Bold,
            // color : COLORS.black 
          }

        }} options={{ headerShown: false  }} >
        <Stack.Screen name="مكتمله" component={CompleteOrders} />
        <Stack.Screen name="تحت التنفيذ" component={UncompleteOrders} />
        <Stack.Screen name="منتجات" component={Tologin} />

      </Stack.Navigator>




    </>

  );
}



export default All_orders;