import { useState } from "react"
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import User_image from '../../components/User_image'
import INputbutton from '../../components/INputbutton';
import { SafeAreaView } from "react-native-safe-area-context";
import Large_button from "../../components/Large_button";
import { useNavigation } from '@react-navigation/native';

const Profile_data_page = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation();

    return (
        <>

            <StatusBar hidden={true} />
            <SafeAreaView style={{
                flex: 1,
                // justifyContent:"space-between",
                width: Sizes.width,
                backgroundColor: COLORS.white
            }}>
                <ScrollView>
                <View style={{
                    flexDirection: "row",
                    // borderWidth:1,
                    paddingVertical: RFPercentage(3),
                    justifyContent: "space-around", alignItems: "center"
                }}>
                    <View>
                        <Back_arrow  onPress={()=> navigation.navigate("Personal_Profile_page")} />
                    </View>
                    <View style={{ flexDirection: "row", width: Sizes.width * 0.7 }}>
                        <Text style={{ color: COLORS.black, fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(3) }}>تعديل الملف الشخصي</Text>

                    </View>

                </View>

                <View style={{
                    // borderWidth:1,
                    flexDirection: "row",
                    justifyContent: "center",
                    // marginTop:RFPercentage(2),
                    // padding:RFPercentage(5)

                }}>
                    <User_image />

                </View>

                <View style={styles.style_view_content_of_user_image_nameandemail}>

                    <View>
                        <Text style={styles.style_Text_topof_points}>النقط الحاليه</Text>
                        <View style={styles.view_points}>
                            <Text onPress={() => alert("120")} numberOfLines={1}
                                style={styles.style_text_in_box_ofpoints}>120</Text>
                        </View>
                    </View>


                    <View >
                        <Text style={styles.style_Text_topof_points} >النقط المستخدمه</Text>
                        <View style={styles.view_points}>
                            <Text onPress={() => alert("204")} numberOfLines={1}
                                style={styles.style_text_in_box_ofpoints}>204</Text>
                        </View>
                    </View>


                </View>

                <View style={{
                    flex: 0.75, justifyContent: "space-around",
                    //  marginTop:RFPercentage(5)
                }}>
                    
                        <View style={{ marginTop: RFPercentage(5) }}>
                            <INputbutton label="الاسم" value="الاء عبد الرازق محمود" />
                            <INputbutton label="البريد الإلكتروني" value="nadaaboelkhir@gmail.com" />
                            <INputbutton label="رقم الهاتف" value="01202477442" />
                        </View>
                    


                    <View style={{ marginTop: RFPercentage(10) }}>
                        {/* navigation.navigate('Home') */}
                        <Large_button button_name="حفظ التعديلات" Confirm_press={() => navigation.navigate("Profile_list")} />
                    </View>

                </View>
                </ScrollView>
            </SafeAreaView>


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
    style_view_content_of_user_image_nameandemail: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: RFPercentage(1),
        alignContent: "center"
        , alignItems: "center"
    },
    style_Text_topof_points: {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.black,
        fontSize: RFPercentage(2.5),
        alignSelf: "center"
        , margin: RFPercentage(1)
    }, view_points: {
        alignSelf: "center",
        width: RFPercentage(15),
        backgroundColor: COLORS.white,
        borderWidth: RFPercentage(.25)
        , borderColor: COLORS.green_mid,
        alignItems: "center",
        borderRadius: RFPercentage(1.5),
    }
    , style_text_in_box_ofpoints: {
        fontSize: RFPercentage(4),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.green_mid,
        marginHorizontal: RFPercentage(1),
        height: RFPercentage(6),
        maxWidth: RFPercentage(20)
    },


})
export default Profile_data_page;