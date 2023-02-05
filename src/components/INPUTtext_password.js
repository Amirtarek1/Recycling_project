
import { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS, FONT, Sizes } from '../constants/index';



const INPUTtext_password = (props) => {

    return (
        <>

            <View style={{
                margin: RFPercentage(1),
                width: Sizes.width * .85,
                // height: RFPercentage(8),
                alignSelf: "center",
                // fontWeight: "600",
                // fontFamily : FONT.font_Almarai_Bold
                flexDirection: "row",
            }}>
                <TextInput
                    style={{
                        fontSize: 18.5,
                        fontFamily: FONT.font_Almarai_Regular,
                        color: "#635B5B",
                        width: Sizes.width * .85,
                        height: RFPercentage(8),
                        backgroundColor: COLORS.white,

                    }}

                    label={<Text style={{ fontSize: 16, color : "#00000099", 
                     fontFamily: FONT.font_Almarai_Regular }}>{props.label}</Text>}
                    // accessibilityActions="#00000099"
                    accessibilityLabel="#0d0"
                    mode='outlined'
                    outlineColor="#0000001F"
                    activeOutlineColor="#7DBB69"
                    selectionColor='#7DBB69'
                    error={props.error}
                    value={props.value}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={props.onChangeText}

                />


                <TouchableOpacity
                    onPress={props.security_of_eye}
                    style={{
                        justifyContent: "center"
                        , marginLeft: -RFPercentage(7),
                        alignSelf: "center"
                    }}>
                    <Icon
                        size={RFPercentage(5)}
                        name={props.name_of_icon}>
                    </Icon>
                </TouchableOpacity>

            </View>







        </>
    )


}


export default INPUTtext_password;