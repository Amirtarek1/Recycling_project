
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import User_image from '../../components/User_image';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useFormik } from 'formik';
import { SignupSchema } from "../../Forms/Schema";
import { Sign_up_initial_values } from '../../Forms/Initial_values';
import { styles } from './Style_Personal_profile_page';
import Back_arrow from '../../components/Back_arrow';



const Personal_Profile_page = (props) => {



    return (
        <>
            <StatusBar backgroundColor={COLORS.black} />

            <ScrollView style={{ backgroundColor: COLORS.white }}>

                <View style={styles.Basic_container}>

                    <View style={styles.view_arrow_and_text_style}>

                        <Back_arrow />

                        <View>
                            <Text style={styles.text_title_name}>الملف الشخصي</Text>
                        </View>

                        <View>
                            <Text onPress={() => alert("hhhhh")}
                                style={styles.text_edit_button}>تعديل</Text>
                        </View>

                    </View>


                    <View style={{
                        flexDirection: "row",
                        padding: RFPercentage(2),
                        alignItems: "center",
                        backgroundColor: COLORS.white
                    }}>
                        <User_image />
                        <View style={{ margin: RFPercentage(3) }}>
                            <Text style={styles.style_name_withphoto}>الاء عبد الرازق محمود</Text>
                            <Text style={styles.style_email_withphoto}>nadaaboelkheir@gmail.com</Text>
                        </View>

                    </View>

                    <View style={styles.style_view_content_of_user_image_nameandemail}>

                        <View>
                            <Text style={styles.style_Text_topof_points}>النقط الحاليه</Text>
                            <View style={styles.view_points}>
                                <Text onPress={() => alert("hhhhh")} numberOfLines={1}
                                    style={styles.style_text_in_box_ofpoints}>120</Text>
                            </View>
                        </View>
                       

                        <View >
                            <Text style={styles.style_Text_topof_points} >النقط المستخدمه</Text>
                            <View style={styles.view_points}>
                                <Text onPress={() => alert("hhhhh")} numberOfLines={1}
                                    style={styles.style_text_in_box_ofpoints}>204</Text>
                            </View>
                        </View>
                    

                    </View>

                    <View style={{ marginTop: RFPercentage(5) }}>
                        <View style={{ marginLeft: RFPercentage(4) }}>
                            <Text style={styles.name_title} >الاسم</Text>
                            <Text style={styles.input_name_title}>الاء عبد الرازق محمود</Text>
                            <View style={styles.view_line}></View>
                        </View>




                        <View style={{ marginLeft: RFPercentage(4), marginTop: RFPercentage(3) }}>
                            <Text style={styles.name_title}>البريد الالكتروني</Text>
                            <Text style={styles.input_name_title}>nadaaboelkheir@gmail.com</Text>
                            <View style={styles.view_line}></View>
                        </View>



                        <View style={{ marginLeft: RFPercentage(4), marginTop: RFPercentage(3), }}>
                            <Text style={styles.name_title}>رقم الهاتف</Text>
                            <Text style={styles.input_name_title}>32149028</Text>
                            <View style={styles.view_line}></View>
                        </View>

                    </View>

                </View>

                <View style = {{marginTop : RFPercentage(4)}}>
                    <Large_button button_name="حذف الحساب" />
                </View>
            </ScrollView>
        </>
    )
}

export default Personal_Profile_page;