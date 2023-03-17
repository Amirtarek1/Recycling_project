import {  View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, Sizes } from '../constants/index';
import BackarrowSVG from "../../src/assets/Icons/right-arrow-icon.svg"


const Back_arrow = () => {


    return (
        <>


            <View style={styles.View_of_touchableopacity }>
                <TouchableOpacity onPress={()=>alert("ghgg")} style={[ styles.shadowProp ,styles.button_touchableopacity]} >
                    <BackarrowSVG  style={styles.back_Icon} height ={25}  fill = {COLORS.gray_mid} />
                </TouchableOpacity>
            </View>

        </>
    )
}
const styles = StyleSheet.create({

    back_Icon:
    {
        tintColor: COLORS.gray_mid,
    },
    button_touchableopacity:
    {
        alignItems: "center",
         justifyContent: "center",
        backgroundColor: COLORS.white,
        height: RFPercentage(4.5),
        width: Sizes.width * .08,
        borderRadius: RFPercentage(4)
    },
    View_of_touchableopacity: {
        alignItems: "flex-start",
    }, shadowProp: {  
        shadowOffset: {width: 10, height: 14 },  
        shadowColor: COLORS.black,  
        elevation: 15,
        shadowOpacity: .5,  
      },  

})

export default Back_arrow;