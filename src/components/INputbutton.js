
import { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';


import { COLORS, FONT, Sizes } from '../constants/index';



const INputbutton = (props) => {

    const [fouse, setfoucse] = useState()


    return (
        <>

            <TextInput
                style={{
                    fontSize: 18,
                    fontFamily: FONT.defult_font,
                    fontWeight: "bold",
                    color : "#0dd",
                    width: Sizes.width * .9,
                    height: RFPercentage(9),
                    alignSelf: "center",
                    margin: 30
                }}

                label="الاسم"
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




        </>
    )


}

const styles = StyleSheet.create(
    {

    }
)
export default INputbutton;