
import { Text, View } from 'react-native';
import { COLORS } from './src/constants/index';
import Login_page  from "./src/screens/Auth/Login_page"
import Verification_page  from "./src/screens/Auth/Verification_page"
import Password_reset_page  from "./src/screens/Auth/Password _reset_page"
import Profile_data_page  from "./src/screens/Profile/Profile_data_page"
import Large_button from "./src/components/Large_button"
import Back_arrow from "./src/components/Back_arrow"
import Signup_page1 from "./src/screens/Auth/Signup_page1"
import INputbutton from './src/components/INputbutton';
import INPUTtext_password from './src/components/INPUTtext_password';
import Forgetpassword1 from './src/screens/Auth/Forgetpassword1';
import Testpage1 from './src/Test_pages/Testpage1';
const App = () => {


  return (
    <>
<Profile_data_page/>
{/* <Signup_page1/> */}
    </>
  )


}

export default App