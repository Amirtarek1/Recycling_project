
import { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, StatusBar ,TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';


import { COLORS, FONT, Sizes } from '../constants/index';



const INputbutton = (props) => {




    return (
        <>
        <StatusBar backgroundColor={COLORS.black}/>

            <TextInput
                style={{
                    margin: RFPercentage(1.5),
                    fontSize: 18.5,
                    fontFamily: FONT.defult_font,
                    color: "#635B5B",
                    width: Sizes.width * .85,
                    height: RFPercentage(8),
                    alignSelf: "center",
                    backgroundColor: COLORS.white,
                   
                }}

                label={<Text style={{
                    fontSize: 21 , fontFamily: FONT.font_Almarai_Regular
                }}
                >{props.label}</Text>}

                textColor="#635B5B"
                mode='outlined'
                outlineColor="#0000001F"
                activeOutlineColor="#7DBB69"
                selectionColor='#7DBB69'
                cursorColor={COLORS.gray_dark}
                error={props.error}
                value={props.value}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}

            />







        </>
    )


}


export default INputbutton;