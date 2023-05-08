import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT, Sizes, images } from '../../../constants';
import HeaderDeliveryAuth from '../../../components/HeaderDeliveryAuth';
import INputbutton from '../../../components/INputbutton';
import { Delivery_Signup_initial_values } from '../../../Forms/Initial_values';
import { useFormik } from 'formik';
import { DeliverySignupSchema } from '../../../Forms/Schema';
import { Text, View , ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../../constants/themes';
import Large_button from '../../../components/Large_button';
import INPUTtext_password from '../../../components/INPUTtext_password';
import { Checkbox } from 'react-native-paper';


const Signup_Delivery = () => {


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };



    const [checked2, setChecked2] = useState(false);

    const handleCheck2 = () => {
        setChecked2(!checked2);
    };




    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: DeliverySignupSchema,
            initialValues: Delivery_Signup_initial_values,
            onSubmit: () => {
                // navigation.replace('Home');
            },
        });


    return (
        <>





            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView>
                    <HeaderDeliveryAuth namePage="انشاء حساب" show={true} />

                    <View style={{
                        marginTop: RFPercentage(6),
                        justifyContent: "center", alignItems: "center"
                    }}>

                        <INputbutton

                            label="الاسم كما هوا في البطاقة"
                            value={values.nameValidation}
                            onChangeText={handleChange('nameValidation')}
                            errors={errors.nameValidation}
                            touched={touched.nameValidation}
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







                        <View style ={{alignSelf :"flex-start" , marginLeft : RFPercentage(1)}}>


                            <Checkbox.Item 
                            labelStyle={{fontFamily : FONT.font_Almarai_Regular,textAlign :"auto" , fontSize : RFPercentage(2)}}
                                position='leading'
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={handleCheck}
                                color={COLORS.green_mid}
                                label='هل عمرك اكبر من 18 عام ؟'
                                rippleColor={COLORS.green_mid}
                                uncheckedColor={COLORS.gray_light}

                            />
                            
                        </View>



                        <View style ={{alignSelf :"flex-start" , marginLeft : RFPercentage(1)}}>


                          
                        <Checkbox.Item 
                        
                            labelStyle={{color : COLORS.green_mid ,textAlign :"auto" ,fontFamily : FONT.font_Almarai_Regular , fontSize : RFPercentage(2)}}
                                position='leading'
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={handleCheck2}
                                color={COLORS.green_mid}
                                rippleColor={COLORS.green_mid}
                                 uncheckedColor={COLORS.gray_light}
                                label= "أوافق على شروط الاستخدام و علي سياسه الخصوصيه"
                            />
                            
                        </View>



                    </View>

                 
                    <View style={{ paddingVertical: hp(4) }}>
                        <Large_button button_name="تابع" Confirm_press={() => handleSubmit()} />
                    </View>


                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: COLORS.black, fontSize: RFPercentage(2), fontFamily: FONT.font_Almarai_Regular }}> هل لديك حساب ؟ <Text onPress={() => { navigation.navigate("Signup_page1") }} style={{ color: COLORS.green_mid, fontSize: RFPercentage(2), fontFamily: FONT.font_Almarai_Bold }} >تسجيل الدخول</Text></Text>
                    </View>
                </ScrollView>
            </SafeAreaView>



        </>
    )


}

export default Signup_Delivery;