import {  View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, Sizes } from '../constants/index';
import BackarrowSVG from "../../src/assets/Icons/arrow.svg"
import { hp, wp } from '../constants/themes';


const Back_arrow = ({onPress}) => {


    return (
        <>


           
                <TouchableOpacity style={[ styles.shadowProp ,styles.button_touchableopacity]} >
                    <BackarrowSVG  onPress={onPress} height ={30}   />
                </TouchableOpacity>
     

        </>
    )
}
const styles = StyleSheet.create({

  
    button_touchableopacity:
    {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        height: hp(4) ,
        width: wp(7.5),
        borderRadius: RFPercentage(4)

    }, shadowProp: {  
        shadowOffset: {width: 10, height: 14 },  
        shadowColor: COLORS.black,  
        elevation: 15,
        shadowOpacity: .5,  
      },  

})

export default Back_arrow;