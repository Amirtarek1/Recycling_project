
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes} from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import { TextInput } from '@react-native-material/core';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const login_page = () => {


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
<View style={{flex :0.8,width:Sizes.width ,
backgroundColor:COLORS.white ,
// marginTop:RFPercentage(-2),
 borderTopEndRadius: RFPercentage(8),
 borderTopStartRadius: RFPercentage(8)
}}></View>
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