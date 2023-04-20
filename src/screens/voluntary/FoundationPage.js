import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, Image, ScrollView } from 'react-native';
import Back_arrow from '../../components/Back_arrow';
import { styles } from './Style_Foundation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import { hp } from "../../constants/themes";
import Large_button from "../../components/Large_button";
import { useNavigation } from '@react-navigation/native';




const FoundationPage = ({ route }) => {
    const navigation = useNavigation();

const [data , setdata] = useState(route.params.name)

    useEffect(() => {
     
    }, [setdata]);

    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.view_arrow_place]}>
                        <Back_arrow  onPress={()=> navigation.goBack()} />
                    </View>

                    <View>
                        <Image source={data.image}
                            style={styles.style_image} />
                    </View>



                    <View style={styles.style_View_of_counterandpoints}>
                        <View style={[styles.shadowProp, styles.style_oneof_View_counter_or_points]}>
                            <Text style={styles.style_Text_for_POints}>عدد المتبرعين</Text>
                            <Text style={styles.style_Number_points} >300 +</Text>
                        </View>

                        <View style={[styles.shadowProp, styles.style_oneof_View_counter_or_points]}>
                            <Text style={styles.style_Text_for_POints}>النقط الحالية</Text>
                            <Text style={styles.style_Number_points}>3000</Text>
                        </View>

                    </View>


                    <View style={[styles.shadowProp, styles.style_View_about_Foundation]}>

                        <Text style={styles.style_about_word}>حول</Text>
                        <Text style={styles.style_about_text_dis}>مؤسسة مجدي يعقوب لأمراض وأبحاث القلب منذ إنشائها عام 2008، لتزمت ببناء وتطوير أحدث مراكز علاج القلب في محافظة أسوان في مصر لتوفير علاج متطور وعالي الجودة للفئات المحرومة</Text>

                    </View>

                    <View style={[styles.shadowProp, styles.style_email_and_number_View]}>

                        <Text style={styles.style_email_text}>الموقع الالكتروني : <Text style={styles.style_email_and_number_validation}>info@myf-egypt.org</Text></Text>
                        <Text style={styles.styles_number_text}>التليفون : <Text style={styles.style_email_and_number_validation}>27365166 -20 +</Text></Text>

                    </View>

                    <View style={{ padding: hp(3) }}>
                        <Large_button button_name="تبرع الان" Confirm_press={() => navigation.navigate("Donate")} />
                    </View>


                </ScrollView>




            </SafeAreaView>




        </>
    )


}


export default FoundationPage;