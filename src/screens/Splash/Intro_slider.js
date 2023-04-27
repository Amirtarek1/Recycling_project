import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import AppIntro from 'react-native-app-intro';
import { images } from '../../constants';
import { Text } from 'react-native-paper';
import Splash_2 from './splash_2';
import Splash_3 from './Splash_3';
import Splash_4 from './Splash_4';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: images.Splash_3,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: images.Save_planet,
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image:images.Splash_4,
    backgroundColor: '#22bcb5',
  }
];

const Intro_slider = () => {
 
 const    [showRealApp,setShow] = useState(0);

  const _renderItem =  ({ item }) => {
    return (
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
    );
  }
  _onDone = () => {
    Alert("dadad")
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShow(true);
  }
  
    if (showRealApp) {
      return (
      // <App />
      <Text>App</Text>);
    } else {
      return(
        <>
<AppIntro>
  <Splash_2/>
  <Splash_3/>
  <Splash_4/>
</AppIntro>
</>
      );
    }
  
}

export default Intro_slider;