import { Dimensions } from "react-native";
import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from "../../constants";
import { hp, wp } from "../../constants/themes";


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


export const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white
        , alignContent: "center"
    },
    view_arrow_place: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(2),
    },
    white_container: {
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(4),
        borderTopStartRadius: RFPercentage(4)


    }, shadowProp: {
        shadowColor: COLORS.black,
        elevation: 4,
        shadowOpacity: .5,

    },style_image: {
        width: wp(55),
        height: hp(23),
        alignSelf: "center"
    },
    error: {
        color: 'red',
        fontSize: RFValue(18,h),
        alignSelf : "center"
        
      },
})