
import { Text, View } from 'react-native';
import { COLORS } from './src/constants/index';
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

const App = () => {


  return (
    <>
{/* <Change_password1/> */}
{/* <Large_button button_name = "انشاء الحساب"/> */}
{/* <INputbutton/> */}
{/* <Back_arrow/> */}
{/* <Signup_page1/> */}
{/* <Forgetpassword1/> */}
{/* <INPUTtext_password/> */}
{/* <Testpage1/> */}
    {/* <Confirm_page_forget_password/> */}

    <Personal_Profile_page/>
    </>
  )


}

export default App