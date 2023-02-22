
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
                        flexDirection :"row",
                        margin : RFPercentage(2),
                        backgroundColor: COLORS.white
                    }}>
                       <User_image/>
                       <View style = {{margin : RFPercentage(3)}}>
                        <Text style={{fontFamily : FONT.font_Almarai_Bold ,textAlign : "center" , fontSize : 22 ,color : COLORS.gray_mid}}>الاء عبد الرازق محمود</Text>
                        <Text style={{fontFamily : FONT.font_Almarai_Regular ,textAlign : "center" , fontSize : 16 ,color : COLORS.black_mid}}>nadaaboelkheir@gmail.com</Text>
                       </View>
                    
                    </View>

                    <View style={{
                        backgroundColor: COLORS.white, flexDirection: "row",
                        justifyContent: "space-around", padding: RFPercentage(2)
                        , alignContent: "center", alignItems: "center"
                    }}>

                        <View>
                            <Text style={styles.style_Text_topof_points}>النقط الحاليه</Text>
                            <View style={styles.view_points}>
                                <Text onPress={() => alert("hhhhh")} numberOfLines={1}
                                    style={styles.style_text_in_box_ofpoints}>20</Text>
                            </View>
                        </View>

                        {/* ///////////////////////////////////// */}
                        <View>
                            <Text style={styles.style_Text_topof_points}>النقط المستخدمه</Text>
                            <View style={styles.view_points}>
                                <Text onPress={() => alert("hhhhh")} numberOfLines={1}
                                style={styles.style_text_in_box_ofpoints}>2000000000</Text>
                            </View>
                        </View>

                    </View>

                </View>


            </ScrollView>
        </>
    )
}

export default Personal_Profile_page;