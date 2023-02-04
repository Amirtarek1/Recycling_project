
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../src/constants/themes';

const Testpage1 = () => {

    return (
        <>



           
<Text style = {{fontSize : 28 , fontFamily :"NotoKufiArabic-Black"}}>البريد الالكتروني</Text>
<Text style = {{fontSize : 28 , fontFamily :"NotoKufiArabic-Bold"}}>الاسم</Text>
<Text style = {{fontSize : 28 , fontFamily :"NotoKufiArabic-ExtraBold"}}>الاسم</Text>
<Text style = {{fontSize : 28 , fontFamily : FONT.font_Almarai_ExtraBold}}>الاسم</Text>
<Text style = {{fontSize : 28 , fontFamily : FONT.font_Almarai_Bold }}>الاسم</Text>

        </>
    )


}

const styles = StyleSheet.create({


})
export default Testpage1;