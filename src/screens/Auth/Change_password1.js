
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useFormik } from 'formik';
import { Change_passwordSchema } from '../../Forms/Schema';
import { Change_password_initial_values } from '../../Forms/Initial_values';
import { styles } from '../Auth/Style_Change_password';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Change_password1 = () => {

    const navigation = useNavigation();
    const { handleChange, handleSubmit, values, errors, touched } =
        useFormik({
            validationSchema: Change_passwordSchema,
            initialValues: Change_password_initial_values,
            onSubmit: () => {
                ClickSubmit();
            },
        });

    const ClickSubmit = () => { }
    return (
        <>

            <StatusBar backgroundColor={COLORS.black} />

            <ScrollView style={{ backgroundColor: COLORS.white }}>
                <SafeAreaView>


                    <View style={[styles.view_arrow_and_text_style]}>

                        <Back_arrow onPress={() => navigation.navigate("Profile_list")} />
                        <View>
                            <Text style={[styles.text_Bold_style]}>تغيير كلمه المرور</Text>
                        </View>


                    </View>


                    <View style={{
                        alignItems: "center", margin: RFPercentage(1),
                        marginTop: RFPercentage(6)
                    }}>
                        <Text style={{
                            fontSize: RFPercentage(3),
                            color: COLORS.gray_mid,
                            fontFamily: FONT.font_Almarai_Bold,
                            textAlign: "center"
                        }}> يجب ان تكون كلمة مرورك الجديده مختلفه عن كلمة مرورك الحالية</Text>
                       
                    </View>
                    <View style={styles.white_container}>

                        <View style={{ marginTop: RFPercentage(5), }}>


                            <INPUTtext_password
                                label="كلمه المرور القديمه"
                                name_of_icon="eye"
                                value={values.oldpassword}
                                onChangeText={handleChange('oldpassword')}
                                errors={errors.oldpassword}
                                touched={touched.oldpassword}
                            />


                            <INPUTtext_password
                                label="كلمه المرور الجديده"
                                name_of_icon="eye"
                                value={values.newpassword}
                                onChangeText={handleChange('newpassword')}
                                errors={errors.newpassword}
                                touched={touched.newpassword}
                            />
                            <INPUTtext_password
                                label="تأكيد كلمه المرور الجديده"
                                name_of_icon="eye"
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                errors={errors.confirmPassword}
                                touched={touched.confirmPassword}
                            />
                        </View>


                    </View>
                    <View style={{ marginTop: RFPercentage(10) }}>
                        {/* navigation.navigate('Home') */}
                        <Large_button button_name="تأكيد" Confirm_press={()=> navigation.navigate("Profile_list") } />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )


}

export default Change_password1;