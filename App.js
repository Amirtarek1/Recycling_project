
import { Text, View } from 'react-native';
import { COLORS } from './src/constants/index';
import Large_button from "./src/components/Large_button"
import Back_arrow from "./src/components/Back_arrow"
import Signup_page1 from "./src/screens/Auth/Signup_page1"
import INputbutton from './src/components/INputbutton';
const App = () => {


  return (
    <>

{/* <Large_button button_name = "انشاء الحساب"/> */}
{/* <INputbutton/> */}
{/* <Back_arrow/> */}
<Signup_page1/>
    </>
  )


}

export default App