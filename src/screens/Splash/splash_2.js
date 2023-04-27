import React from 'react';
import Lottie from 'lottie-react-native';
import { COLORS, FONT, images, lotties } from '../../constants';
import { Sizes, hp } from '../../constants/themes';
import { Text ,View } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Image } from 'react-native-animatable';
const Splash_2 = ()=> {
  return (
<>
<SafeAreaView style = {{
    backgroundColor :COLORS.white,
    justifyContent:"center",
    flex:1,
    // justifyContent:"space-around"
    }}>
        <Image style = {{width:hp(35) , height : hp(35),
         alignSelf :"center",
         bottom : hp(10)
        }}
 source={images.Save_planet}   />
{/* <View> */}
    {/* <View> */}
    <Text style={{
        //  top :hp(-6) ,
         alignSelf :"center" , color:COLORS.green ,
 fontFamily :FONT.font_Almarai_Bold,fontSize : RFPercentage(4),
 bottom : hp(5)

 }} >
    إعادة تدورير الزيت 
 </Text>

    {/* </View> */}
 {/* <View> */}
 <Text style={{
    //  top :hp(-12) ,
 alignSelf :"center" ,
  color:COLORS.green ,
 fontFamily :FONT.font_Almarai_Bold,alignSelf:"center",width:Sizes.width*0.7,lineHeight:30,color:COLORS.black,
 fontSize : RFValue(18),textAlign:"center"}} >
حافظ علي البيئه من خلال تبديل الزيت المستعمل بنقاط من خلالنا تستطيع من خلالها التبرع بها او شراء منتجات او الحصول علي كوبونات خصم.
 </Text>
 
 {/* </View> */}
 {/* </View> */}
</SafeAreaView>
{/* <View style = {{flex : 1}}> */}

{/* </View> */}

{/* <Text style={{fontFamil :FONT.font_Almarai_Bold}}>
ReOil
</Text> */}

</>

    );
}
export default Splash_2;