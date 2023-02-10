import { COLORS, FONT, icons, Sizes } from '../../constants';

import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';



export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white
        , alignContent: "center",
        
    },text_title_name :{
        fontFamily : FONT.font_Almarai_ExtraBold,
        color : COLORS.black,
        justifyContent :"center",
        alignItems :"center",
        fontSize : 20,
        margin: RFPercentage(0.5),
    },

    text_edit_button :{
        fontFamily: FONT.font_Almarai_ExtraBold ,
        fontSize : 20 , 
        color: COLORS.green_mid,
        margin: RFPercentage(0.5),
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent : "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }

})