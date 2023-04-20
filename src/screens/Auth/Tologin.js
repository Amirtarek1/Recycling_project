import { useState } from "react"
import INPUTtext_password from '../../components/INPUTtext_password';
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, images, Sizes } from '../../constants';
import INputbutton from '../../components/INputbutton';
import CheckBox from '@react-native-community/checkbox';
import Large_button from "../../components/Large_button";
import { styles } from './Style_LoginPage';
import { hp } from "../../constants/themes";
import { Dimensions } from "react-native";
import { LoginSchema } from "../../Forms/Schema";
import { login_initial_values } from "../../Forms/Initial_values";
import { useFormik } from "formik";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";


const w = Dimensions.get("screen").width

const Tologin = () => {


    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: LoginSchema,
            initialValues: login_initial_values,
            onSubmit: () => {
                navigation.replace('Home');
            },
        });


    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);



    return (
        <>

            <ScrollView style={{ backgroundColor: COLORS.white }}>
                <SafeAreaView style={styles.Basic_container}>
                    <View style={styles.green_container}>

                        <View style={styles.view_arrow_and_text_style}>


                            <View>
                                <Text style={styles.text_Bold_style}>اهلا و سهلا</Text>
                                <Text style={styles.text_thin_style}>تسجيل الدخول الى حسابك</Text>
                            </View>


                        </View>


                    </View>

                    <View style={styles.white_container}>

                        <View style={{ padding: hp(5) }}>

                            <INputbutton
                                label="البريد الألكتروني"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                errors={errors.email}
                                touched={touched.email}
                            />


                            <View style={{ paddingTop: hp(2.5) }}>

                                <INPUTtext_password
                                    label="كلمة المرور"
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    errors={errors.password}
                                    touched={touched.password}
                                    password={password}
                                    setPassword={setPassword}
                                    visible={passwordVisible}
                                    setVisible={setPasswordVisible}


                                />
                                <View style={{
                                    flexDirection: "row",
                                    width: Sizes.width * 0.88,
                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingHorizontal: RFPercentage(1)
                                }}>
                                    <View style={{
                                        flexDirection: "row"
                                        , justifyContent: "space-between"
                                        , alignItems: "center"
                                    }}>
                                        <CheckBox

                                            style={{ borderColor: COLORS.black }}
                                            disabled={false}
                                            value={toggleCheckBox}
                                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        />
                                        <Text style={{ fontFamily: FONT.font_Almarai_Regular, fontSize: RFPercentage(2.2), color: COLORS.gray_mid }}>تذكرني</Text>
                                    </View>

                                    <TouchableOpacity>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Regular, fontSize: RFPercentage(2.2), color: COLORS.green }} onPress={() => navigation.navigate("Forgetpassword_EnterEmail")}>نسيت كلمة المرور؟</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>


                            <View style={{ paddingVertical: hp(4) }}>
                                {/* navigation.navigate('HOME_Stack') handleSubmit() */}
                                <Large_button button_name="تسجيل الدخول" Confirm_press={() => handleSubmit() } />
                            </View>

                            <View style={{
                                paddingTop: RFPercentage(4),
                                flexDirection: "row",
                                alignSelf: "center",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <View style={{
                                    width: w * 0.25,
                                    borderWidth: RFPercentage(0.1),
                                    backgroundColor: COLORS.gray_dark
                                }}></View>

                                <Text style={{ color: COLORS.black, fontSize: RFPercentage(2), justifyContent: "center", textAlign: "center", paddingHorizontal: hp(1.5), fontFamily: FONT.font_Almarai_Bold }}>أو تسجيل الدخول بواسطة</Text>

                                <View style={{
                                    width: w * 0.25,
                                    borderWidth: RFPercentage(0.1),
                                    backgroundColor: COLORS.gray_dark
                                }}></View>


                            </View>

                            <View style={{
                                marginVertical: hp(2.5),
                                flexDirection: "row",
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: "space-around",
                                width: Sizes.width * 0.40,
                                height: Sizes.height * 0.1
                            }}>
                                <Image source={images.facebook} style={{ width: 50, height: 50 }} />

                                <Image source={images.google} style={{ width: 50, height: 50 }} />

                            </View>

                            <View style={{ alignItems: "center" }}>
                                <Text style={{ color: COLORS.black, fontSize: RFPercentage(2), fontFamily: FONT.font_Almarai_Regular }}> هل ليس لديك حساب ؟ <Text onPress={() => { navigation.navigate("Signup_page1") }} style={{ color: COLORS.green_mid, fontSize: RFPercentage(2), fontFamily: FONT.font_Almarai_Bold }} >أنشيئ حساب</Text></Text>
                            </View>

                        </View>
                    </View>


                </SafeAreaView>


            </ScrollView>




        </>
    )


}

export default Tologin;