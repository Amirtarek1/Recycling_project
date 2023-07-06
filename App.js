import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message"
import Request_car from './src/screens/Profile/Request_car';
import MoneyStack from './src/navigations/MoneyStack';
import Testpage1 from './src/Test_pages/Testpage1';
import Money_transaction from './src/screens/voluntary/Money_transaction';
import Edit_money_transaction from './src/screens/voluntary/Edit_money_transaction';
import Archives from './src/screens/cash_pages/Archives';
import Cash from './src/screens/cash_pages/cash';
import CoponesStack from './src/navigations/CoponesStack';
import Discount_coupons from './src/screens/voluntary/Discount_coupons';
import Offers from './src/screens/Coponat/Offers';
import Checkoffers from './src/screens/Coponat/Checkoffers';
import Verification_page from './src/screens/Auth/Verification_page';
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
          {/* <Verification_page/> */}
          <MainNavigation />
        </NavigationContainer>
        <Toast />
      </Provider>


    </>
  );
};

export default App;
