
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const Signup_page1 = () => {

    return (
        <>

<StatusBar backgroundColor={COLORS.black}/>

            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <View style={styles.view_arrow_and_text_style}>
                    <Back_arrow />
                    <View>
                        <Text style={styles.text_Bold_style}>تغيير كلمه المرور</Text>


                    </View>



                </View>
                <View style={{
                    alignItems: "center", margin: RFPercentage(2),
                    marginTop: RFPercentage(6)
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: COLORS.gray_mid,
                        fontFamily: FONT.font_Almarai_Bold,
                    }}>يجب ان تكون كلمة مرورك الجديده مختلفه</Text>
                    <Text style={{
                        fontSize: 20,
                        color: COLORS.gray_mid,
                        fontFamily: FONT.font_Almarai_Bold,
                    }}>عن كلمه مرورك الحاليه</Text>

                </View>
                {/* </View> */}


                <View style={styles.white_container}>

                    <View style={{ marginTop: RFPercentage(5), }}>


                        <INPUTtext_password
                            label="كلمه المرور القديمه"
                            name_of_icon="eye"
                        />


                        <INPUTtext_password
                            label="كلمه المرور الجديده"
                            name_of_icon="eye"
                        />
                        <INPUTtext_password
                            label="تأكيد كلمه المرور الجديده"
                            name_of_icon="eye"
                        />
                    </View>


                </View>

                {/* </View> */}
                <View style={{ marginTop: RFPercentage(18.5), }}>
                    <Large_button button_name="تأكيد" />
                </View>

            </ScrollView>




        </>
    )


}

const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center"
    }, green_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 5,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize: 25,
        // fontWeight: "700",
        color: COLORS.black,
        fontFamily: FONT.font_Almarai_Bold,
        marginLeft: RFPercentage(3)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(3)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        // justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, view_text_and_checkbox: {
        marginTop: RFPercentage(1.5),
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
export default Signup_page1;