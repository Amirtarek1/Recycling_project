import { Dimensions } from "react-native"
import { COLORS, FONT, } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
        alignContent: "center"
    }, green_container: {
        flex: 0.1,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 0.9,
        alignItems :"center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(4),
        borderTopStartRadius: RFPercentage(4)
        
    }, text_Bold_style: {
        fontSize: 24,
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Bold,
        marginRight: RFPercentage(6)
    },
    view_photo_and_text_style: {
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: RFPercentage(3.5)
    }, shadowProp: {
        shadowOffset: { width: 10, height: 14 },
        shadowColor: COLORS.black,
        elevation: 10,
        shadowOpacity: .5,
    }, style_of_container_for_view:
    {

        justifyContent :"center",
        marginTop: RFPercentage(4),
    }
    , style_touchableopacity_categories: {
        backgroundColor: COLORS.green_light,
        width: w * 0.45,
        height: h * 0.36,
        borderRadius: RFPercentage(2),
        alignItems: "center",
        marginVertical: h * 0.005,
        marginHorizontal: w * 0.02,
        marginBottom: RFPercentage(3),
        padding: RFPercentage(2)
    }, style_image_in_touchableopacity: {
        width: w * 0.34,
        height: h * 0.16,
    }, style_text_in_touchableopacity: {
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: 20,
         marginTop : RFPercentage(1),
        color: COLORS.green_mid

    }, style_text_in_touchableopacit_pointsnumber: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        fontSize: 17,
        marginVertical : RFPercentage(1.2),
        color: COLORS.black

    }, style_text_in_touchableopacity_toadd_to_cart: {
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: 20,
        color: COLORS.white

    }


})