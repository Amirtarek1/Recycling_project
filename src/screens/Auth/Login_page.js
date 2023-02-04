import {useState} from "react"
import { ScrollView, StatusBar, StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes} from '../../constants';
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
flex :0.20,
justifyContent:"center",
width:Sizes.width,
marginTop : RFPercentage(5),
backgroundColor:COLORS.green_mid
     }}>
        <View style={{
            flexDirection:"row" ,
            width:Sizes.width*0.90,
            alignSelf:"center",
            // alignContent:"center",
            justifyContent:"space-between" 
            }}>
            <View >
<Text style={styles.text_Bold_style}>
    اهلا وسهلا
</Text>
<Text style={styles.text_thin_style} >
تسجيل الدخول إلي حسابك
</Text>
            </View>
            <Back_arrow/>

        </View>

</View>
{/* white container */}
<View style={{flex :0.8 ,
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
                            <INputbutton
                                label="كلمة المرور"
                            />
</View>
<View style={{flexDirection:"row" ,width :Sizes.width*0.88 ,
// borderWidth:1,
alignSelf:"center",
alignItems:"center",
justifyContent:"space-between",
padding:RFPercentage(1)
}}>
     <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
<TouchableOpacity>
  <Text style={{fontSize:15,color:COLORS.green}}>نسيت كلمة المرور؟</Text>
  </TouchableOpacity>
</View>
<Large_button button_name = "تسجيل الدخول"/>
<View style={{
marginTop : RFPercentage(2),
flexDirection :"row" ,
justifyContent:"space-between",
alignItems:"center"}}>
<View style={{width:Sizes.width*.3 ,
     height:RFPercentage(0.25) , 
     backgroundColor:COLORS.gray_dark}}></View>
<Text style={[FONT.defult_font]}></Text>
<View style={{width:Sizes.width*.3 ,
     height:RFPercentage(0.25) , 
     backgroundColor:COLORS.gray_dark}}></View>
     

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