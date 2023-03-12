
import { ScrollView, Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, images, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import { ForgetPasswordEmailSchema } from '../../Forms/Schema';
import { Forgetpassword_initial_values } from '../../Forms/Initial_values';
import { useFormik } from 'formik';
import { styles } from './Style_forgetpassword_enteremail';



const Forgetpassword_EnterEmail = (props) => {
    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: ForgetPasswordEmailSchema,
            initialValues: Forgetpassword_initial_values,
            onSubmit: () => {
                ClickSubmit();
            },
        });

    const ClickSubmit = () => { }

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
                                height: Sizes.height * 0.32
                            }} />

                            <View style={{ alignItems: "center", margin: RFPercentage(2) }}>
                                <Text style={{
                                    textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: 20, color: COLORS.gray_mid
                                }}> سوف نرسل رمزا على الرقم الخاص بك</Text>
                                <Text style={{
                                    textAlign: "center", fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: 20, color: COLORS.gray_mid
                                }}> لإعادة تعيين رقمك السري </Text>

                            </View>

                            <INputbutton
                                label="البريد الالكتروني"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                errors={errors.email}
                                touched={touched.email}
                            />

                        </View>


                    </View>



                </View>
                <View style={{ marginTop: RFPercentage(3) }}>
                    <Large_button button_name="إرسال" Confirm_press={() => handleSubmit()}/>
                </View>


            </ScrollView>




        </>
    )


}

export default Forgetpassword_EnterEmail;