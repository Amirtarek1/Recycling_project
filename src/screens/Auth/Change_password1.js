
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


const Change_password1 = () => {

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



                <View style={[styles.view_arrow_and_text_style ]}>
                    
                    <Back_arrow />
                    <View>
                <Text style={[styles.text_Bold_style, {textAlign :"center" }]}>تغيير كلمه المرور</Text>


                    </View>


                </View>
                <View style={{
                    alignItems: "center", margin: RFPercentage(2),
                    marginTop: RFPercentage(6)
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: COLORS.gray_mid,
                        fontFamily: FONT.font_Almarai_Bold,
                    }}>يجب ان تكون كلمة مرورك الجديده مختلفه</Text>
                    <Text style={{
                        fontSize: 20,
                        color: COLORS.gray_mid,
                        fontFamily: FONT.font_Almarai_Bold,
                    }}>عن كلمه مرورك الحاليه</Text>

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

                {/* </View> */}
                <View style={{ marginTop: RFPercentage(5) }}>
                    <Large_button button_name="تأكيد" Confirm_press={() => handleSubmit()} />
                </View>

            </ScrollView>
        </>
    )


}

export default Change_password1;