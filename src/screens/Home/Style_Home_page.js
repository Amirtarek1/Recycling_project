import { Dimensions } from "react-native"
import { COLORS, FONT, } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center"
    }, green_container: {
        flex: 0.16,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 0.84,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize: 24,
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Bold,
        marginRight: RFPercentage(6)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Regular,
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
    }, style_of_container_for_touchableopacity:
    {
        alignSelf :"center",
        height : h * 0.5,
        justifyContent :"center",
        marginTop: RFPercentage(8),

    }
    , style_touchableopacity_categories: {
        backgroundColor: COLORS.green_light,
        width: w * 0.397,
        height: h * 0.215,
        borderRadius: RFPercentage(2),
        alignItems: "center",
        marginVertical: h * 0.005,
        marginHorizontal: w * 0.04,
        marginBottom: RFPercentage(3),
        padding: RFPercentage(1)
    }, style_image_in_touchableopacity: {
        width: w * 0.31,
        height: h * 0.15,
        alignSelf: "center"
    }, style_text_in_touchableopacity: {
        fontFamily: FONT.font_Almarai_Bold,
        fontSize: 20,
        //  marginVertical: RFPercentage(1),
        color: COLORS.green_mid

    }


})