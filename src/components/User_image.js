import React, { useState } from 'react'


import { Text, View, StatusBar, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, FONT, icons, images, Sizes } from '../constants/index';

// USER_PROFILE.png

const User_image = () => {


    return (
        <>

            <View
                style={{
                    borderWidth: RFPercentage(0.6),
                    borderColor : COLORS.green_mid,
                    width: RFPercentage(11)
                    , height: RFPercentage(11),
                    borderRadius: RFPercentage(5.5),
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Image resizeMode="cover"
                    source={images.USER_PROFILE}
                    style={{
                        width: RFPercentage(10),
                        height: RFPercentage(10),
                        alignSelf: "center",
                        tintColor : COLORS.eye_color
                    }}
                />
            </View>


        </>
    )
}
const styles = StyleSheet.create({



})

export default User_image;