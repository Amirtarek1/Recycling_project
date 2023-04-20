import React from 'react';
import Lottie from 'lottie-react-native';
import { COLORS, FONT, lotties } from '../../constants';
import { hp } from '../../constants/themes';
import { Text ,View } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const Reoil= ()=> {
  return (
<>
<SafeAreaProvider style = {{backgroundColor :COLORS.yellow,justifyContent:"center"}}>
<Lottie style = {{width:hp(40) , height : hp(40), alignSelf :"center"}}
 source={lotties.Reoil} autoPlay loop />
<Text style={{ top :hp(-6) ,alignSelf :"center" , color:COLORS.green , fontFamily :FONT.font_Almarai_Bold,fontSize : RFPercentage(8)}} >
    RE<Text style={{alignSelf :"center" , color:COLORS.green , fontFamily :FONT.font_Almarai_ExtraBold,fontSize : RFPercentage(6)}} >-Oil</Text ></Text>
</SafeAreaProvider> 
{/* <View style = {{flex : 1}}> */}

{/* </View> */}

{/* <Text style={{fontFamil :FONT.font_Almarai_Bold}}>
ReOil
</Text> */}

</>

    );
}
export default Reoil;