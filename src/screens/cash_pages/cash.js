import { ScrollView, Image, TouchableOpacity,Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../components/Back_arrow';
import { hp } from '../../constants/themes';
import { COLORS, FONT, Sizes } from '../../constants/themes';
import WallletSvg from "../../assets/Icons/wallet.svg"

const Cash = () => {

    return (
        <>

<View style={{flex : 1 ,backgroundColor : COLORS.white }}>

    <View style= {{
        flexDirection : "row" ,
        padding : hp(2),
        justifyContent :"space-between",
        alignItems : "center",
        width :Sizes.width*1
        }}>
        <TouchableOpacity>
        <Back_arrow/>
        </TouchableOpacity>
        <Text style={{
                        fontSize: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.black,
                        alignSelf: "center"
                    }}>تحويل الفلوس</Text>
<TouchableOpacity>
<WallletSvg

 width = {RFPercentage(6)}
 height = {RFPercentage(6)}
  />

</TouchableOpacity>
        </View> 


</View>
        </>
    )


}

export default Cash;