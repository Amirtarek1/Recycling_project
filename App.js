
import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message"
import { NavigationContainer } from '@react-navigation/native'; 
// import { Provider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DeliveryStack from './src/navigations/DeliveryStack';
import HomeDelPage from './src/screens/Delivery/HomeDelivery/HomeDelPage';
import Requests_search from './src/screens/Delivery/HomeDelivery/Requests_search';
import Drawer_delivery from './src/screens/Delivery/HomeDelivery/Drawer_delivery';
import { createStackNavigator } from '@react-navigation/stack';
import UncompleteOrdersDelivery from './src/screens/Delivery/HomeDelivery/UncompleteOrdersDelivery';
import All_orders from './src/screens/Profile/All_orders';
import Profile_data_page from './src/screens/Profile/Profile_data_page';
import National_id_picker from './src/screens/Delivery/authDelivery/National_id_picker';
import Select_user from './src/screens/Profile/Select_user_page';
const App = () => {
  const Drawer = createDrawerNavigator();
  const [isConnected, setIsConnected] = useState(true);
  const Stack = createStackNavigator();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);



  useEffect(() => {
    if (!isConnected) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: "برجاء التاكد من الاتصال بالانترنت",
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 100,

      });
    }
  }, [isConnected]);

  return (
    <>

       {/* <Provider store={store}>  */}
           <NavigationContainer> 
{/* <All_orders/> */}
{/* <Profile_data_page/> */}
<Select_user/>
{/* <National_id_picker/> */}
          {/* <Stack.Navigator  screenOptions={{
          headerShown: false,}}>
        <Stack.Screen

      {/* //   name="Drawer_delivery" component={Drawer_delivery} />
      //   <Stack.Screen name="DeliveryStack" component={DeliveryStack} />
      // </Stack.Navigator> */}
    {/* <DeliveryStack/> */}
{/* <Requests_search/> */}
    {/* <Drawer_delivery/> */}
      </NavigationContainer>  

       {/* </Provider>  */}
{/* <Address_page/> */}
      {/* // <Toast />  */}
      {/* <Requests_search/> */}
{/* <National_id_picker/> */}
{/* <Car_id_picture/> */}
{/* <CanceledOrders/> */}
       {/* <Drawer_delivery/> */}

    </>
  );
};

export default App;
