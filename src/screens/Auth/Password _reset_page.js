import { ScrollView, Image, Text, View, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, images, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import { ForgetPasswordEmailSchema, Forget_passwordSchema } from '../../Forms/Schema';
import { Forgetpassword_initial_values, Forget_password_initial_Values } from '../../Forms/Initial_values';
import { useFormik } from 'formik';
import { styles } from './Style_Password_reset_page';
import { useState } from 'react';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Password_reset_page = (props) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: Forget_passwordSchema,
            initialValues: Forget_password_initial_Values,
            onSubmit: () => {
                navigation.navigate("Confirm_page_forget_password");

            },
        });

    const navigation = useNavigation();
    console.log(values.NEW_password)
    return (
        <>



            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <SafeAreaView style={styles.Basic_container}>
                    <View style={styles.green_container}>

                        <View style={styles.view_arrow_and_text_style}>
                            <Back_arrow onPress={() => navigation.goBack()} />

                            <View>
                                <Text style={styles.text_Bold_style}>نسيت كلمه المرور</Text>
                                <Text style={styles.text_thin_style}>تحقق من البريد الالكتروني </Text>
                            </View>


                        </View>


                    </View>

                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(2) }}>

                            <Image source={images.Resetpassword} style={{
                                alignSelf: "center",
                                width: w * 0.8,
                                height: w * 0.8,
                            }} />

                            <View style={{ alignItems: "center", margin: RFPercentage(1) }}>
                                <Text style={{
                                    textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(3), color: COLORS.gray_mid
                                }}> سوف نرسل رمزا على الرقم الخاص بك</Text>
                                <Text style={{
                                    textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(3), color: COLORS.gray_mid
                                }}> لإعادة تعيين رقمك السري </Text>

                            </View>

                            <INPUTtext_password
                                label="كلمة المرور"

                                value={values.NEW_password}
                                errors={errors.NEW_password}
                                touched={touched.NEW_password}
                                visible={passwordVisible}
                                setVisible={setPasswordVisible}
                                onChangeText={handleChange('NEW_password')}
                            />


                            <INPUTtext_password
                                label="تأكيد كلمة المرور"
                                onChangeText={handleChange('CONfirmationPassword')}
                                value={values.CONfirmationPassword}
                                errors={errors.CONfirmationPassword}
                                touched={touched.CONfirmationPassword}
                                visible={confirmPasswordVisible}
                                setVisible={setConfirmPasswordVisible}
                            />

                        </View>


                    </View>



                </SafeAreaView>
                <View style={{ marginVertical: RFPercentage(3) }}>
                    <Large_button button_name="إرسال" Confirm_press={() => handleSubmit()} />
                </View>


            </ScrollView>




        </>
    )


}

export default Password_reset_page;