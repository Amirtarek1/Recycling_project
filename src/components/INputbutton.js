
import { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';


import { COLORS, FONT, Sizes } from '../constants/index';



const INputbutton = ({
    label, value, placeholder, keyboardType, secureTextEntry, onChangeText, errors, touched
}) => {




    return (
        <>
            <StatusBar backgroundColor={COLORS.black} />


            <View style={{

                width: Sizes.width * 0.9,
                alignSelf: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: RFPercentage(1)

            }}>
                <TextInput
                    style={{
                        fontSize: 18.5,

                        fontFamily: FONT.font_Almarai_Regular,
                        color: "#635B5B",
                        width: Sizes.width * .85,
                        height: RFPercentage(8),
                        alignSelf: "center",
                        backgroundColor: COLORS.white,
                    }}

                    label={<Text style={{
                        fontSize: 18.5,
                        fontFamily: FONT.font_Almarai_Regular
                    }}
                    >{label}</Text>}

                    textColor="#635B5B"
                    mode='outlined'
                    outlineColor="#0000001F"
                    activeOutlineColor="#7DBB69"
                    selectionColor='#7DBB69'
                    cursorColor={COLORS.gray_dark}
                    value={value}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}

                />

            </View>

            {errors && touched !== undefined ? <Text style = {{
                color : COLORS.red_logout ,textAlign : "center", justifyContent :"center",
             fontFamily : FONT.font_Almarai_Regular
             }} >{errors}</Text>
             : <></>}
            
        </>
    )


}


export default INputbutton;