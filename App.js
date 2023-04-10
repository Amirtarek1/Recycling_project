

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AnimTab2 from './src/screens/Bottomtabs/AnimTab2';

import { MainNavigation } from './src/navigations/MainNavigator';


const App = () => {


  return (
    <>
      <NavigationContainer> 
      <MainNavigation />
      {/* <ProfileStack /> */}

      </NavigationContainer>



    </>
  )


}

export default App;
