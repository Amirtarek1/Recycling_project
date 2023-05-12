
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import Tologin from './src/screens/Auth/Tologin';
import Signup_page1 from './src/screens/Auth/Signup_page1';
import AuthStack from './src/navigations/AuthStack';



const App = () => {

  return (
    <>


      <Provider store={store}>
        <NavigationContainer>
          {/* <AuthStack/> */}
          <MainNavigation/>
          {/* <Signup_page1 /> */}
        </NavigationContainer>
      </Provider>

    </>
  )


}





export default App;
