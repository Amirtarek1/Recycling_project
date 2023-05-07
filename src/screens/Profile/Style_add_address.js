import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    basic_container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: RFPercentage(2)
    },
    white_main_container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header_view: {
        flexDirection: "row",
        alignItems: "center"
    },

    title_view: {
        flex: 1,
        alignItems: "center"
    },
    title_text:
    {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.gray_mid,
        fontSize: RFPercentage(3.5)
    },
    loc_info:
    {
        marginTop: RFPercentage(2),
        fontSize: RFPercentage(2.5),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.gray_mid
    },
    governorate_view:
    {
        marginTop: RFPercentage(2)
    },
    governorate_text:
    {
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.black,
        fontSize: RFPercentage(2.5),

    },
    quarter_view :
    {
        flexDirection: "row",
        alignItems: "center"
    },
    quarter_textInput:
    {
        width: Sizes.width * 0.95,
        backgroundColor: COLORS.white,
        borderTopWidth: 0,
        borderBottomWidth: 0.1,
        borderColor: COLORS.gray_light,
        fontFamily: FONT.font_Almarai_Bold,
        fontSize: RFPercentage(2.5),
    },
    addition_info:
    {
        marginTop: RFPercentage(3),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.white_gray,
        fontSize: RFPercentage(2.4),

    },
    edit:
    {
        left: RFPercentage(-10),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.green_mid,
        fontSize: RFPercentage(2.5),
      },
      additional_textInput :
      {
        width: Sizes.width * 0.95,
        backgroundColor: COLORS.white,
        borderBottomWidth: 0.1,
        borderColor: COLORS.gray_light
    },
    personal_info :
    {
        marginTop: RFPercentage(3),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.gray_mid,
        fontSize: RFPercentage(2.5),

    },
    mobile_title :
    {
        marginTop: RFPercentage(3),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.gray_light,
        fontSize: RFPercentage(2.5),

    },
    mobile_textInput:
    {
        width: Sizes.width * 0.95,
        backgroundColor: COLORS.white,
        borderBottomWidth: 0.1,
        borderColor: COLORS.gray_light,
        fontFamily : FONT.font_Almarai_Bold
    },
    first_name_title:
    {
        marginTop: RFPercentage(3),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.gray_light,
        fontSize: RFPercentage(2.5),

    },
 first_name_textInput :   {
        width: Sizes.width * 0.95,
        backgroundColor: "#fff",
        borderBottomWidth: 0.1,
        borderColor: COLORS.gray_light,
        fontFamily : FONT.font_Almarai_Bold

    },
    last_name_title :
    {
        marginTop: RFPercentage(3),
        fontFamily: FONT.font_Almarai_Regular,
        color: COLORS.gray_light,
        fontSize: RFPercentage(2.5),

    },
    last_name_textInput:
    {
        width: Sizes.width * 0.95,
        backgroundColor: "#fff",
        borderBottomWidth: 0.1,
        borderColor: COLORS.gray_light,
        marginBottom: RFPercentage(4),
        fontFamily : FONT.font_Almarai_Bold
    }






})