
import  { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet ,Text, TextInput, TouchableOpacity, View } from 'react-native';


import { COLORS, FONT, Sizes } from '../constants/index';



const INputbutton = (props) => {

    const [fouse, setfoucse] = useState()


    return (
        <>
       

            <TextInput
                style={{

                    borderColor: fouse ? COLORS.green_mid : COLORS.text_input_border,
                    width: Sizes.width * .9,
                    padding : RFPercentage(2.5),
                    borderWidth: 2,
                    height: RFPercentage(9),
                    alignSelf: "center",
                    margin: 30,
                    borderRadius: RFPercentage(1.5)
                }}
                onFocus={() => setfoucse(true)} 
                onBlur={() => setfoucse(false)}
                returnKeyLabelel = "dsasd"
                value={props.value}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={props.onChangeText}
                //{props.label}
                variant="outlined"
            />




        </>
    )


}

const styles = StyleSheet.create(
    {

    }
)
export default INputbutton;