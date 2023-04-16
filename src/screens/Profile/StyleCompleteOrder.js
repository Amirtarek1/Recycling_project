import { COLORS,  } from '../../constants';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {  FONT, Sizes } from '../../constants';

export const styles = StyleSheet.create({

    FakeButton_style:
    {
        width: RFPercentage(0),
    }, shadowProp: {
        shadowOffset: { width: 10, height: 14  },
        shadowColor: COLORS.black,
        elevation: 5,
        shadowOpacity: .2,
    },

    FakeView_style:
    {
        height: 0,
        marginTop: RFPercentage(-13)
    },

    HeaderText_style:
    {
        fontSize: RFPercentage(3.5),
        fontFamily: 'Changa-Medium'
    },
    Button_style: {

        paddingVertical: RFPercentage(.5),
        width: Sizes.width * .9,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    view_in_button_style: {
        flexDirection: 'row',
        alignItems: "center"
    }
    ,
    Button_icon_end:
    {
        height: RFPercentage(3),
        marginRight: RFPercentage(4),
        width: RFPercentage(2.5),
    },
    Button_icon_start:
    {
        //  backgroundColor :"#0d0",
        height: RFPercentage(4),
        width: RFPercentage(4),
        marginLeft: RFPercentage(3),
        tintColor: COLORS.black

    },
    photo_user_button: {
        alignSelf: "center",
        height: RFPercentage(25),
        margin: RFPercentage(2),
        width: RFPercentage(25),
        borderRadius: RFPercentage(50),
        backgroundColor: "#000"
    },
    user_name: {
        textAlign: "center",
        justifyContent: "center",
    },
    line: {
        height: RFPercentage(.1),
        backgroundColor: COLORS.black,
        width: Sizes.width * .9,
        alignSelf: "center"
    },
    Button_style_shop: {
        paddingVertical: RFPercentage(.5),
        width: Sizes.width * .8,
        height: RFPercentage(8),
        backgroundColor: COLORS.black,
        // margin: RFPercentage(3),
        borderRadius: RFPercentage(3),
        alignItems: "center",
        justifyContent: "center"
    },
    text_style: {
        textAlign: "center",
    },
    view_style_order: {
        flexDirection: "row",
        paddingVertical: RFPercentage(1)
        , alignItems: "center"
    },
    Huge_view_style_order: {
        backgroundColor: COLORS.eye_color,
        width: Sizes.width * .8,
        marginVertical: RFPercentage(2),
        padding: RFPercentage(3)
        , borderRadius: 15
    }



})

// export const styles = StyleSheet.create({
//     Basic_container: {
//         flex: 1,
//         backgroundColor: COLORS.white,
//         alignContent: "center",
//        alignItems :"center"
//     },
//     text_Bold_style: {
//         alignSelf :"center",
//         fontSize: RFPercentage(3.5),
//         textAlign: "center",
//         color: COLORS.black,
//         fontFamily: FONT.font_Almarai_ExtraBold,

//     }, text_thin_style: {
//         fontSize: RFPercentage(3),
//         color: COLORS.white,
//         fontFamily: FONT.font_Almarai_Regular,
//         marginLeft: RFPercentage(3)
//     },
//     view_arrow_and_text_style: {
//         flexDirection: "row",
//         // justifyContent: "space-between",
//         margin: RFPercentage(2),
//         marginTop: RFPercentage(4)

//     },
//     View_days: {
//         flexDirection: "row",
//         marginTop: RFPercentage(4)

//     }

// })