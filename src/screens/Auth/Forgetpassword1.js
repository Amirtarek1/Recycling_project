
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const Forgetpassword1 = () => {

    return (
        <>



            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <View style={styles.Basic_container}>
                    <View style={styles.green_container}>

                        <View style={styles.view_arrow_and_text_style}>
                            <Back_arrow />
                            <View>
                                <Text style={styles.text_Bold_style}>نسيت كلمه المرور</Text>
                                <Text style={styles.text_thin_style}>تحقق من البريد الالكتروني </Text>
                            </View>


                        </View>


                    </View>


                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(7) }}>

                            <Image source={images.forget_password} style={{
                                width: Sizes.width * 0.7 
                                , margin: RFPercentage(1)
                                , alignSelf: "center",
                                height: Sizes.height*0.32
                            }} />

                            <View style={{ alignItems: "center", margin: RFPercentage(2) }}>
                                <Text style={{ textAlign: "center", fontFamily: FONT.font_Almarai_Regular, 
                                fontSize: 20, color: COLORS.gray_mid }}> سوف نرسل رمزا على الرقم الخاص بك</Text>
                                <Text style={{ textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                 fontSize: 20, color: COLORS.gray_mid }}> لإعادة تعيين رقمك السري </Text>

                            </View>

                            <INputbutton
                                label="البريد الالكتروني"
                            />

                        </View>


                    </View>



                </View>
                <View style={{ marginTop: RFPercentage(3) }}>
                    <Large_button button_name="إرسال" />
                </View>


            </ScrollView>




        </>
    )


}

const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center",

    }, green_container: {
        flex: 0.16,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 0.84,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize: 22,
        // fontWeight: "700",
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Bold,
        marginLeft: RFPercentage(3)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.font_Almarai_Regular,
        marginLeft: RFPercentage(3)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        // justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, view_text_and_checkbox: {
        margin: RFPercentage(1.5),
        width: Sizes.width * .85,
        // backgroundColor :"#00f",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    }, touchablopacity_checkbox_style: {
        backgroundColor: COLORS.green_mid
        , width: RFPercentage(4)
        , height: RFPercentage(4),
    }, text_with_checkbox: {
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: FONT.defult_font,
        fontSize: 14
    }, view_text_to_check_for_login: {
        margin: RFPercentage(2),
        width: Sizes.width * .85,
        //  backgroundColor :"#00f",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center"
    }, back_Icon:
    {
        tintColor: COLORS.white,
        height: RFPercentage(3.6),
        width: Sizes.width * 0.062,
        alignSelf: "center"


    },

})
export default Forgetpassword1;