import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import { COLORS, FONT, lotties } from '../../constants';
import { hp } from '../../constants/themes';
import { Text, View } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const Reoil = () => {

  const navigation = useNavigation();

  const [firstTime , setfirstTime] = useState(true)
  const [sign , setsign] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(firstTime ? 'Intro_slider' : (sign?'Home':'Auth'))
    }, 3500);
  }, [])


  return (
    <>
      <SafeAreaProvider style={{ backgroundColor: COLORS.yellow, justifyContent: "center" }}>
        <Lottie style={{ width: hp(35), height: hp(35), alignSelf: "center" }}
          source={lotties.Reoil} autoPlay loop />
        <Text style={{ alignSelf: "center", color: COLORS.green, fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(6) }} >
          RE<Text style={{ alignSelf: "center", color: COLORS.green, fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(5) }} >-Oil</Text ></Text>
      </SafeAreaProvider>


    </>

  );
}
export default Reoil;