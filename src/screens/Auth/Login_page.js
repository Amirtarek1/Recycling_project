import {useState} from "react"
import INPUTtext_password from '../../components/INPUTtext_password';
import { ScrollView, StatusBar, StyleSheet, Image,Text, View ,TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import CheckBox from '@react-native-community/checkbox';
import Large_button from "../../components/Large_button";
const login_page = () => {
const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <>

<StatusBar hidden={true}/>
<View style={{
    flex : 1,
    width:Sizes.width,
    backgroundColor:COLORS.green_mid
     }}>
<View style={{
flex :0.16,
// justifyContent:"center",
flexDirection:"row",
// alignItems:"center",
// alignSelf:"flex-end",
// width:Sizes.width,
justifyContent:"flex-start",
alignItems:"center",
marginTop : RFPercentage(0),
backgroundColor:COLORS.green_mid
     }}>
                    <Back_arrow/>

        <View style={{
            flexDirection:"row" ,
            // width:Sizes.width*0.90,
marginLeft:RFPercentage(-4) 
            }}>
            <View >
<Text style={styles.text_Bold_style}>تحقق من كلمة المرور</Text>
            </View>

        </View>

</View>
{/* white container */}
<View style={{flex :0.84 ,
backgroundColor:COLORS.white ,
padding : RFPercentage(10),
// marginTop:RFPercentage(-2),
 borderTopEndRadius: RFPercentage(8),
 borderTopStartRadius: RFPercentage(8)
}}>
    <View style = {{ marginBottom:RFPercentage(1)}}> 
  <INputbutton
                                label="رقم الهاتف"

                            />
                            
                            <INPUTtext_password label = "كلمة المرور"/>
</View>
<View style={{flexDirection:"row" ,width :Sizes.width*0.88 ,
// borderWidth:1,
alignSelf:"center",
alignItems:"center",
justifyContent:"space-between",
padding:RFPercentage(1)
}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style={{fontFamily : FONT.font_Almarai_Regular,fontSize:15,color:COLORS.gray_mid}}>تذكرني</Text>
    </View>
     
<TouchableOpacity>
  <Text style={{fontSize:15,color:COLORS.green}}>نسيت كلمة المرور؟</Text>
  </TouchableOpacity>
</View>
<Large_button  button_name = "تسجيل الدخول"/>
<View style={{
marginTop : RFPercentage(4),
flexDirection :"row" ,
alignSelf:"center",
justifyContent:"space-between",
alignItems:"center"}}>
<View style={{width:Sizes.width*.28 ,
     height:RFPercentage(0.1) , 
     backgroundColor:COLORS.gray_dark}}></View>
<Text style={{marginHorizontal:10,fontFamily:FONT.font_Almarai_Bold}}>أو تسجيل الدخول بواسطة</Text>
<View style={{width:Sizes.width*.28 ,
     height:RFPercentage(0.1) , 
     backgroundColor:COLORS.gray_dark}}></View>
     

</View>
<View style={{flexDirection:"row",
alignSelf:"center",
alignItems:"center",
justifyContent:"space-around",
borderWidth:0
 ,width:Sizes.width*0.40,
 height:Sizes.height*0.1
 }}>
<Image source={images.facebook} style={{width:50 ,height:50}}/> 

<Image source={images.google} style={{width:50 ,height:50}}/> 

 </View>
 <View style={{marginTop : RFPercentage(3),alignItems:"center" }}>
    <Text  style={{color:COLORS.black,fontSize:14,fontFamily:FONT.font_Almarai_Regular}}> هل ليس لديك حساب ؟ <Text style={{color:COLORS.green_mid}}>أنشيئ حساب</Text></Text>
     </View>

</View>

</View>

        </>
    )


}

const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center"
    }, green_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 5,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }


})
export default login_page;