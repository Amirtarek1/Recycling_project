import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';
import WifiOff from "../assets/Icons/WifiOff.svg"
import { FONT, hp } from '../constants/themes';
import { RFPercentage } from 'react-native-responsive-fontsize';
// WifiOff.svg
const NetUtils = () => {
    return (
        <>
            <View style={styles.container}>

                <WifiOff height={hp(20)} width={hp(20)}  />
                <Text 
                style ={{fontFamily : FONT.font_Almarai_ExtraBold , color :COLORS.black
                    ,fontSize :RFPercentage(3), padding :RFPercentage(5)}}
                >برحاء الاتصال بالانترنت</Text>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
});

export default NetUtils;