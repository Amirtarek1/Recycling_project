

import Home_page from './src/screens/Home/Home_page';
import Types_oil from './src/screens/Home/Types_oil';
import Personal_Profile_page from './src/screens/Profile/Personal_Profile_page';
{/****
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AnimTab2 from './src/screens/Bottomtabs/AnimTab2';
// import Testpage1 from './src/Test_pages/Testpage1';***/}

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimTab2 from './src/screens/Bottomtabs/AnimTab2';
import Change_password1 from './src/screens/Auth/Change_password1';
import Forgetpassword_EnterEmail from './src/screens/Auth/Forgetpassword1';
import Back_arrow from './src/components/Back_arrow';


const App = () => {


  return (
    <>

      <Types_oil />
      {/* <Home_page/> */}
      {/* <Forgetpassword_EnterEmail/> */}
      {/* <Change_password1/> */}
      {/* <ServicesOil /> */}
      {/* <Home_page /> */}

      {/*   <NavigationContainer>
        <AnimTab2 />
      </NavigationContainer> */}

    </>
  )


}

export default App


