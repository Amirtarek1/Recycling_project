
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import CoponesStack from './src/navigations/CoponesStack';
import { HomeStack } from './src/navigations/HomeStack';
import Edit_money_transaction from './src/screens/voluntary/Edit_money_transaction';
import Money_transaction from './src/screens/voluntary/Money_transaction';
import MoneyStack from './src/navigations/MoneyStack';
import Request_car from './src/screens/Profile/Request_car';
import Donate from './src/screens/voluntary/Donate';
import Offers from './src/screens/Coponat/Offers';


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
