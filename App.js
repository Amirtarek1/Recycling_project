
// import { NavigationContainer } from '@react-navigation/native';
// import { MainNavigation } from './src/navigations/MainNavigator';
// import { Provider } from 'react-redux';
// import store from './src/Redux/Store';
// import React, { useEffect, useState } from 'react';
// import NetInfo from "@react-native-community/netinfo";
// import { View } from 'react-native-animatable';
// import { COLORS } from './src/constants';
// import NetUtils from './src/Utils/NetUtils';
// import To_login_Delivery from './src/screens/Delivery/authDelivery/To_login_Delivery';
// import Verifecation_delivery from './src/screens/Delivery/authDelivery/Verification_delivery';

import Forget_delivery_password from "./src/screens/Delivery/authDelivery/Forget_delivey_password";
import National_id_picker from "./src/screens/Delivery/authDelivery/National_id_picker";



const App = () => {

  // const [isConnected, setIsConnected] = useState(true);

  // const connectionFun = () => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     setIsConnected(state.isConnected);
  //   });
  
  //   return unsubscribe;
  // };

  // useEffect(() => {
  //   const unsubscribe = connectionFun();
  //   return () => {
  //     unsubscribe(); 
  //   };
  // }, []);


  // if (!isConnected) {
  //   return (
  //     <>
  //      <NetUtils/>
  //     </>
  //   );
  // }

  return (
    <>
      {/* <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />

        </NavigationContainer>
      </Provider> */}
      {/* <AuthStack/> */}
      {/* <MainNavigation/> */}
{/* <To_login_Delivery/> */}
   {/* <Verifecation_delivery/> */}
   <National_id_picker/>
      {/* <Signup_page1 /> */}
    </>
  )


}





export default App;
