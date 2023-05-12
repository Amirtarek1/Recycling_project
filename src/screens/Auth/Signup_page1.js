
import { ScrollView, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useFormik } from 'formik';
import { SignupSchema } from "../../Forms/Schema";
import { Sign_up_initial_values } from '../../Forms/Initial_values';
import { styles } from './Style';
import CheckBox from '@react-native-community/checkbox';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { LoginUser, setloading, signUpUser } from '../../Redux/Reducers/authSlice';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../Redux/Reducers/authSlice';


const Signup_page1 = ({ route }) => {


    const dispatch = useDispatch()
    // const { loading, error } = useSelector((state) => state.user);
    const { accessToken } = useSelector((state) => state.user);

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigation = useNavigation();

    // const id = route.params.id
    const { handleChange, handleSubmit, values, errors, touched } =

        useFormik({
            validationSchema: SignupSchema,
            initialValues: Sign_up_initial_values,
            onSubmit: () => {
                dispatch(signUpUser({ username : values.username, email : values.email
                    , password : values.password, passwordConfirmation : values.passwordConfirmation
                    , phoneNumber :values.phoneNumber }));
                () =>navigation.navigate("Home_page");

            },
        });

    useEffect(() => {
        dispatch(signUpUser({
            username: "amsir",
            email: "amir.plsssssu11s@gmail.com",
            password: "thisIsAVeryStrong!*Password",
            passwordConfirmation: "thisIsAVeryStrong!*Password",
            phoneNumber: "00039930"
        }))



    }, [])
    // console.log(accessToken , "IN sign up page ")
    // console.log(accessTokens)



    return (
        <>


            <ScrollView style={{ backgroundColor: COLORS.white }}>



                <SafeAreaView style={styles.Basic_container}>


                    <View style={styles.view_arrow_and_text_style}>
                        <Back_arrow onPress={() => goBack()} />
                        <View>
                            <Text style={styles.text_Bold_style}>إنشاء حساب</Text>
                            <Text style={styles.text_thin_style}>إنشاء حساب جديد في التطبيق</Text>

                        </View>


                    </View>





                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(5) }}>

                            <INputbutton
                                label="الاسم"
                                value={values.username}
                                onChangeText={handleChange('username')}
                                errors={errors.username}
                                touched={touched.username}
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
                                value={values.password}
                                onChangeText={handleChange('password')}
                                errors={errors.password}
                                touched={touched.password}
                                password={password}
                                setPassword={setPassword}
                                visible={passwordVisible}
                                setVisible={setPasswordVisible}


                            />


                            <INPUTtext_password

                                label="تأكيد كلمة المرور"
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                errors={errors.confirmPassword}
                                touched={touched.confirmPassword}
                                password={confirmPassword}
                                setPassword={setConfirmPassword}
                                visible={confirmPasswordVisible}
                                setVisible={setConfirmPasswordVisible}
                            />


                        </View>

                        <View
                            style={styles.view_text_and_checkbox}>

                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />

                            <Text style={[styles.text_with_checkbox, { color: COLORS.black, fontSize: RFPercentage(2), }]}> أوافق على<Text style={[styles.text_with_checkbox, { fontSize: RFPercentage(2), color: COLORS.green_mid }]} > شروط الاستخدام <Text style={[styles.text_with_checkbox, { color: COLORS.black }]}> و علي</Text> سياسه الخصوصيه</Text> </Text>


                        </View>
                    </View>

                </SafeAreaView>
                {/* <Text>{values.email}</Text> handleSubmit */}
                <Large_button button_name="انشاء الحساب" Confirm_press={handleSubmit} />

                <View
                    style={styles.view_text_to_check_for_login}>
                    <Text style={{ color: COLORS.black, fontFamily: FONT.font_Almarai_Light, fontSize: RFPercentage(2) }}>هل لديك حساب ؟  <Text onPress={() => navigate("Tologin")} style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid }}>تسجيل الدخول</Text></Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Signup_page1;