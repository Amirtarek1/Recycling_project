import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message"
import CompleteOrders from './src/screens/Profile/CompleteOrders';
import UncompleteOrders from './src/screens/Profile/UncompleteOrders';




const App = () => {

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [])

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
          <MainNavigation />
        </NavigationContainer>
        <Toast />
      </Provider>


    </>
  );
};

export default App;
