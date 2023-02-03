
import { Text, View } from 'react-native';
import { COLORS } from './src/constants/index';
import Login_page  from "./src/screens/Auth/Login_page"

import Large_button from "./src/components/Large_button"
import Back_arrow from "./src/components/Back_arrow"
import Signup_page1 from "./src/screens/Auth/Signup_page1"
import INputbutton from './src/components/INputbutton';
import INPUTtext_password from './src/components/INPUTtext_password';
const App = () => {


  return (
    <>

{/* <Large_button button_name = "انشاء الحساب"/> */}
{/* <INputbutton/> */}
{/* <Back_arrow/> */}
<Login_page/>
{/* <INPUTtext_password/> */}
    </>
  )


}

export default App