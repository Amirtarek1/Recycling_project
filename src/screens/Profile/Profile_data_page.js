import {useState} from "react"
import INPUTtext_password from '../../components/INPUTtext_password';
import { ScrollView, StatusBar, StyleSheet, Image,Text, View ,TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import CheckBox from '@react-native-community/checkbox';
import Large_button from "../../components/Large_button";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Profile_data_page = () => {
const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <>

<StatusBar hidden={true}/>
<View style={{
    flex : 1,
    width:Sizes.width,
    backgroundColor:COLORS.white
     }}>
        <View style={{flexDirection:"row",borderWidth:1,paddingVertical:RFPercentage(1),
        justifyContent:"space-around",alignItems:"center"}}>
<View>
<Back_arrow />
</View>
<View style={{flexDirection:"row",width:Sizes.width*0.7}}>
<Text style={{color:COLORS.black,fontFamily:FONT.font_Almarai_Bold,fontSize:20}}>تعديل الملف الشخصي</Text>

</View>
   
        </View>

<View style={{
    borderWidth:1,
flexDirection:"row" ,
justifyContent:"space-around",
// alignItems:"center"
padding:RFPercentage(2)

}}>
       <View style={{borderWidth:5,width:RFPercentage(16),height:RFPercentage(16),borderRadius:RFPercentage(8),justifyContent:"center",alignItems:"center"}}>
    <Image resizeMode= "cover"  source={images.google} style={{width:RFPercentage(14),height:RFPercentage(14),borderRadius:RFPercentage(7)
}}/>
</View> 

</View>
{/* 
<View style={{flexDirection:"roww",width:Sizes.width*0.8,justifyContent:"space-between",alignItems:"center"}}>

    <View style={{width:Sizes.width*0.4,borderWidth:2,borderColor:COLORS.green_mid, justifyContent:"space-around",alignItems:"center"}}>

    </View>
</View> */}
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
export default Profile_data_page;