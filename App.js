
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { View } from 'react-native-animatable';
import { COLORS } from './src/constants';
import NetUtils from './src/Utils/NetUtils';



const App = () => {

  const [isConnected, setIsConnected] = useState(true);

  const connectionFun = () => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  
    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = connectionFun();
    return () => {
      unsubscribe(); 
    };
  }, []);


  if (!isConnected) {
    return (
      <>
       <NetUtils/>
      </>
    );
  }

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />

        </NavigationContainer>
      </Provider>
      {/* <AuthStack/> */}
      {/* <MainNavigation/> */}
      {/* <Tologin/> */}
      {/* <Signup_page1 /> */}
    </>
  )


}





export default App;
