
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useFormik } from 'formik';
import { SignupSchema } from "../../Forms/Schema";
import { Sign_up_initial_values } from '../../Forms/Initial_values';
import { styles } from './Style';


const Signup_page1 = (props) => {

    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: SignupSchema,
            initialValues: Sign_up_initial_values,
            onSubmit: () => {
                ClickSubmit();
            },
        });

    const ClickSubmit = () => { }

    return (
        <>


            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <View style={styles.Basic_container}>
                    

                        <View style={styles.view_arrow_and_text_style}>
                            <Back_arrow />
                            <View>
                                <Text style={styles.text_Bold_style}>إنشاء حساب</Text>
                                <Text style={styles.text_thin_style}>إنشاء حساب جديد في التطبيق</Text>

                            </View>


                        </View>


                  


                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(5) }}>

                            <INputbutton
                                label="الاسم"
                                value={values.name}
                                onChangeText={handleChange('name')}
                                errors={errors.name}
                                touched={touched.name}
                            />



                            <INputbutton
                                label="البريد الألكتروني"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                errors={errors.email}
                                touched={touched.email}
                            />


                            <INputbutton
                                label="رقم الهاتف "
                                value={values.phone}
                                onChangeText={handleChange('phone')}
                                errors={errors.phone}
                                touched={touched.phone}
                            />


                            <INPUTtext_password
                                label="كلمة المرور"
                                name_of_icon="eye"

                                value={values.password}
                                onChangeText={handleChange('password')}
                                errors={errors.password}
                                touched={touched.password}

                            />


                            <INPUTtext_password
                                label="تأكيد كلمة المرور"
                                name_of_icon="eye"
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                errors={errors.confirmPassword}
                                touched={touched.confirmPassword}

                            />


                        </View>

                        <View
                            style={styles.view_text_and_checkbox}>
                            <TouchableOpacity style={styles.touchablopacity_checkbox_style} >
                                <Image source={icons.checkbox_icon} style={styles.checkbox_Icon} />
                            </TouchableOpacity>


                            <Text style={[styles.text_with_checkbox, { color: COLORS.black }]}> أوافق على<Text style={[styles.text_with_checkbox, { color: COLORS.green_mid }]} > شروط الاستخدام <Text style={[styles.text_with_checkbox, { color: COLORS.black }]}> و علي</Text> سياسه الخصوصيه</Text> </Text>


                        </View>
                    </View>

                </View>

                <Large_button button_name="انشاء الحساب" Confirm_press={() => handleSubmit()}/>

                <View
                    style={styles.view_text_to_check_for_login}>
                    <Text style={{ fontSize: 15, color: COLORS.black, fontFamily: FONT.font_Almarai_Light }}>هل لديك حساب ؟  <Text onPress={() => alert("hhhhh")} style={{  fontFamily: FONT.font_Almarai_Bold , color: COLORS.green_mid }}>تسجيل الدخول</Text></Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Signup_page1;