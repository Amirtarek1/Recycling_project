
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
import Change_password1 from "./src/screens/Auth/Change_password1";
import Testpage1 from './src/Test_pages/Testpage1';
import Confirm_page_forget_password from './src/screens/Auth/Confirm_page_forget_password';
import Personal_Profile_page from './src/screens/Profile/Personal_Profile_page';
import User_image from "./src/components/User_image"
const App = () => {


  return (
    <>
<Profile_data_page/>
{/* <Signup_page1/> */}

      {/* <Change_password1/> */}
      {/* <Large_button button_name = "انشاء الحساب"/> */}
      {/* <INputbutton/> */}
      {/* <Back_arrow/> */}
      {/* <Signup_page1/> */}
      {/* <Forgetpassword1/> */}
      {/* <INPUTtext_password/> */}
      {/* <Testpage1/> */}
      {/* <Confirm_page_forget_password/> */}
      {/* <User_image/> */}
      {/* <Personal_Profile_page/> */}
    </>
  )


}

export default App