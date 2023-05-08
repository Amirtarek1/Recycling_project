
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import CoponesStack from './src/navigations/CoponesStack';
import { HomeStack } from './src/navigations/HomeStack';
import To_login_Delivery from './src/screens/Delivery/authDelivery/To_login_Delivery';
import Signup_Delivery from './src/screens/Delivery/authDelivery/Signup_Delivery';
import Email_Page from './src/screens/Delivery/authDelivery/Email_Page';
import Tologin from './src/screens/Auth/Tologin';
import store from './src/Redux/Store';
import Signup_page1 from './src/screens/Auth/Signup_page1';


const App = () => {

  return (
    <>



      <Provider store={store}>
        <NavigationContainer>
          <Signup_page1 />
        </NavigationContainer>
      </Provider>

    </>
  )


}





export default App;
