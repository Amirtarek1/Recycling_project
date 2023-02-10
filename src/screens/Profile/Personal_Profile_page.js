
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
import { styles } from './Style_Personal_profile_page';


const Personal_Profile_page = (props) => {



    return (
        <>


            <ScrollView style={{ backgroundColor: COLORS.white }}>

                <View style = {styles.Basic_container}>

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
                </View>


            </ScrollView>
        </>
    )
}

export default Personal_Profile_page;