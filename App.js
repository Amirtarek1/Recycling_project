
import Offers from './src/screens/Coponat/Offers';


import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import CompleteOrders from './src/screens/Profile/CompleteOrders';
import All_orders from './src/screens/Profile/All_orders';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const App = () => {

  return (
    <>
     {/* <Provider store={store}> 
      <NavigationContainer  >
        <All_orders/>
      </NavigationContainer>
     
    </Provider> */}
<Offers/>

    </>
  )


}
export default App;
