import {useState} from "react"
import INPUTtext_password from '../../components/INPUTtext_password';
import { ScrollView, SafeAreaView,StatusBar, StyleSheet, Image,Text, View ,TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton'


import Large_button from "../../components/Large_button";
const Password_reset_page = () => {
    const CELL_COUNT = 4;

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    return (
        <>

<StatusBar hidden={true}/>
<ScrollView>
<View style={{
    flex : 1,
    width:Sizes.width,
    backgroundColor:COLORS.green_mid
     }}>
<View style={{
flex :0.16,
flexDirection:"row",
// alignItems:"center",
// alignSelf:"flex-end",
// width:Sizes.width,
justifyContent:"flex-start",
marginTop : RFPercentage(4),
backgroundColor:COLORS.green_mid
     }}>
                    <Back_arrow/>

        <View style={{

            flexDirection:"row" ,
            // width:Sizes.width*0.90,
marginLeft:RFPercentage(-4) 
            }}>
            <View >
<Text style={styles.text_Bold_style}>
    إعادة تعيين كلمة المرور
</Text>
<Text style={styles.text_thin_style} >
ادخل كلمة مرور جديدة</Text>
            </View>

        </View>

</View>
{/* white container */}
<View style={{flex :0.84 ,
backgroundColor:COLORS.white ,

padding : RFPercentage(5),
justifyContent:"space-around",
// marginTop:RFPercentage(-2),
 borderTopEndRadius: RFPercentage(8),
 borderTopStartRadius: RFPercentage(8)
}}>
    {/* <Image source={images.verification} style={{width : Sizes.width*0.7, backgroundColor:"#fff",
        height:Sizes.height*0.35,marginTop:RFPercentage(3)
        ,alignSelf:"center"
        }}/> */}


<View style={{ marginTop: RFPercentage(1) 
}}>

                            <Image source={images.forget_password} style={{
                                width: Sizes.width * 0.7 
                                , margin: RFPercentage(1)
                                , alignSelf: "center",
                                height: Sizes.height*0.32
                            }} />
</View>
        <View style={{justifyContent:"space-around",marginTop:RFPercentage(2)}}>
<Text style={{alignSelf:"center",fontFamily:FONT.font_Almarai_Regular,fontSize:16}}>يجب أن تكون كلمة مرورك الجديدة مختلفة</Text>
<Text style={{alignSelf:"center",fontFamily:FONT.font_Almarai_Regular,fontSize:17}}>عن كلمة المرور التي اخلتها سابقا</Text>

</View>
<View style={{    justifyContent:"space-between"
// ,marginVertical:RFPercentage(4)
,}} >

<INPUTtext_password label="كلمة المرور"/>

<INPUTtext_password label="تاكيد المرور"/>
</View>

<View style={{
    // marginTop:RFPercentage(1),
    // marginBottom:RFPercentage(-5),
    
    }}>
    <Large_button button_name="تأكيد" />
    </View>
            
</View>

</View>
</ScrollView>

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
        marginLeft: RFPercentage(6),
        marginBottom:RFPercentage(4)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    },
    root: { padding: 20,justifyContent:"space-around",flexDirection:"row"},
    title: {textAlign: 'center', fontSize: 0},
    codeFieldRoot: {},
    cell: {
        borderRadius:RFPercentage(1),
      width: 50,
      height: 60,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      marginHorizontal:RFPercentage(1),
      borderColor: COLORS.gray_ofwhite,
      textAlign: 'center',
    },
    focusCell: {
      borderColor: COLORS.green_mid,
    },


})
export default Password_reset_page;