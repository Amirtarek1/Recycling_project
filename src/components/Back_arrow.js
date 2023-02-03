import React, { useState } from 'react'


import { Text, View, StatusBar, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, FONT, icons, Sizes } from '../constants/index';



const Back_arrow = () => {


    return (
        <>


            <View style={styles.View_of_touchableopacity }>
                <TouchableOpacity style={[ styles.shadowProp ,styles.button_touchableopacity]} >
                    <Image source={icons.Back_right_arrow} style={styles.back_Icon} />
                </TouchableOpacity>
            </View>

        </>
    )
}
const styles = StyleSheet.create({

    back_Icon:
    {
        tintColor: COLORS.gray_mid,
        height: RFPercentage(2.5),
        width: Sizes.width * .06,


    },
    button_touchableopacity:
    {
        alignItems: "center",
         justifyContent: "center",
        backgroundColor: COLORS.white,
        height: RFPercentage(4.5),
        marginTop: RFPercentage(1),
        margin: RFPercentage(1),
        width: Sizes.width * .08,
        borderRadius: RFPercentage(4)
    },
    View_of_touchableopacity: {
        alignItems: "flex-start",
    }, shadowProp: {  
        shadowOffset: {width: -4, height: -4 },  
        shadowColor: "#000",  
        elevation: 30,
        shadowOpacity: .5,  
        // shadowRadius: 3,  
      },  

})

export default Back_arrow;