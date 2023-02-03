
import { ScrollView,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';

import { useState } from 'react';

const Signup_page1 = () => {

    return (
        <>



            <ScrollView>

            

                <View style={styles.Basic_container}>
                    <View style={styles.green_container}>

                        <View style={styles.view_arrow_and_text_style}>
                            <View>
                                <Text style={styles.text_Bold_style}>إنشاء حساب</Text>
                                <Text style={styles.text_thin_style}>إنشاء حساب جديد في التطبيق</Text>

                            </View>
                            <Back_arrow />

                        </View>


                    </View>


                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(7) }}>

                            <INputbutton
                                label="الاسم"

                            />
                            <INputbutton
                                label="البريد الألكتروني"
                            />
                            <INputbutton
                                label="رقم التليفون"
                            />
                            <INPUTtext_password
                                label="كلمة المرور"
                            />

                            <INPUTtext_password
                                label="تأكيد كلمة المرور"
                            />
                        </View>

                        <View>
                           <TouchableOpacity>
                            <Text>sdad</Text>
                           </TouchableOpacity>

                        </View>
                    </View>





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
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    },

})
export default Signup_page1;