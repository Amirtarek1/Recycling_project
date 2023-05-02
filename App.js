
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Start_slider from './src/screens/Splash/Start_slider';
import { HomeStack } from './src/navigations/HomeStack';
import Reoil from './src/screens/Splash/ReOil_page';
import All_orders from './src/screens/Profile/All_orders';


const App = () => {

  return (
    <>


   
      <Provider store={store}>
        <NavigationContainer  >
          <MainNavigation />
        </NavigationContainer>
      </Provider>



    </>
  )


}


{/* <Provider store={store}> 
      <NavigationContainer  >
        <MainNavigation/>
      </NavigationContainer>
    </Provider> */}


export default App;
