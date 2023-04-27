
import Offers from './src/screens/Coponat/Offers';


import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigator';
import CompleteOrders from './src/screens/Profile/CompleteOrders';
import All_orders from './src/screens/Profile/All_orders';


const App = () => {

  return (
    <>
      <NavigationContainer>
        <All_orders/>
      </NavigationContainer>
     
    </>
  )


}
export default App;
