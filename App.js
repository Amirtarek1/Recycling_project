import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message"
import ProfileStack from './src/navigations/ProfileStack';
import Request_car from './src/screens/Profile/Request_car';
import Types_oil from './src/screens/Home/Types_oil';
import HomeDelPage from './src/screens/Delivery/HomeDelivery/HomeDelPage';

const App = () => {


  const [isConnected, setIsConnected] = useState(true);

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

      <Provider store={store}>
        <NavigationContainer>
      {/* <Types_oil/> */}
      {/* <Request_car/> */}
      <HomeDelPage />
      {/* <MainNavigation /> */}
      </NavigationContainer>
      </Provider>

      <Toast />

    </>
  );
};

export default App;


