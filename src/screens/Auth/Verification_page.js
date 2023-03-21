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
import Large_button from "../../components/Large_button";
const Verification_page = () => {
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
justifyContent:"space-around",
// marginTop:RFPercentage(-2),
 borderTopEndRadius: RFPercentage(8),
 borderTopStartRadius: RFPercentage(8)
}}>
    <Image source={images.verification} style={{width : Sizes.width*0.45, 
        height:Sizes.height*0.3
        ,alignSelf:"center"
        }}/>
        <View style={{height:Sizes.height*0.1,justifyContent:"space-around",marginTop:RFPercentage(4)}}>
<Text style={{alignSelf:"center",fontFamily:FONT.font_Almarai_Regular,fontSize:16}}>أدخل الرمز المكون من 4 أرقام الذي</Text>
<Text style={{alignSelf:"center",fontFamily:FONT.font_Almarai_Regular,fontSize:17}}>  ارسلناه إلي  <Text style={{fontSize:18,color:COLORS.green_mid}}>01017588904</Text></Text>

</View>
<SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>

    <Text style = {{alignSelf:"center",marginBottom:RFPercentage(5),fontFamily:FONT.font_bold_noto ,color:COLORS.black_light}}>الم تستلم الرمز ؟ <Text style = {{fontFamily:FONT.font_bold_noto ,color:COLORS.green_mid}}>أرسل مرة أخري</Text></Text>
    <Large_button button_name="تأكيد" />
            
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
export default Verification_page;