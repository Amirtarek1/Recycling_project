
import { ScrollView, Image, TouchableOpacity,FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useFormik } from 'formik';
import { SignupSchema } from "../../Forms/Schema";
import { Sign_up_initial_values } from '../../Forms/Initial_values';
import SvgLocation from "../../assets/Icons/user.svg"

const Request_car = (props) => {
const label_data_list=
[
{
label :"الاسم",
label_content : "ألاء محمد عبدالرازق"     
},
{
label :"العنوان",
label_content : "طنطا شارع الحلو المتفرع من حسن رضوان - طنطا - الغربية"
}
,
{
    label :"رقم الهاتف",
    label_content : "+201017699452"
}
]
   
    return (
        <>

<StatusBar hidden = {true}/>
            <ScrollView style={{ backgroundColor: COLORS.white ,
                // padding :RFPercentage(2) 
                }}>
<View style={{flex:1,backgroundColor:COLORS.white }}>
<View style={{
    flex : 0.4,
backgroundColor:COLORS.green_mid,
flexDirection : "row",
padding:RFPercentage(2),
paddingVertical:RFPercentage(4),
justifyContent:"space-between",
alignItems:"center"
}}>
<Back_arrow/>
<Text style={{fontFamily:FONT.font_Almarai_Bold,fontSize:18,color:COLORS.white}}>عربة الطلبات</Text>
<Text style={{fontFamily:FONT.font_Almarai_Regular,fontSize:18,color:COLORS.white}} >تاكيد</Text>
</View>
<View style={{backgroundColor:COLORS.yellow, 
    elevation:5,
   borderTopEndRadius:5,
   borderTopLeftRadius:5,
   borderTopRightRadius:5
   ,width:"90%"
   , flex:0.8}}>
{/* <Text>dadad</Text> */}

</View>
</View>
            </ScrollView>
        </>
    )
}

export default Request_car;