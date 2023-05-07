import React from "react"
import { ScrollView, TouchableOpacity, Text, View,useState } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import{styles} from "./Style_add_address"
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
 
const Add_address = (props) => {
    const navigation = useNavigation();
    const [quarter ,setQuarter] = React.useState ("")
    const [addressDetails,setAddresDetails] = React.useState("")
    const [personalInformation,setPersonalInformation] =React.useState("")
    const [mobileNumber,setMobileNumber] = React.useState("")
    const [firstName,setFirstName] =  React.useState("")
    const [lastName,setLastName] = React.useState("")
    const [governorate,setGovernorate] = React.useState("طنطا - الغربية")

    return (
        <>

            <ScrollView >
                <SafeAreaView style={styles.basic_container}>

                    <View style={styles.white_main_container}>
                        <View style={styles.header_view}>
                            <Back_arrow onPress={() => navigation.goBack()} />
                            <View style = {styles.title_view}>
                                <Text style={styles.title_text}>تفاصيل العنوان</Text>
                            </View>
                        </View>
                        <Text style={styles.loc_info}>معلومات الموقع</Text>
                        <View style={styles.governorate_view}>
                            <Text style={styles.governorate_text} numberOfLines={1} >{governorate}</Text>
                        </View>
                        <View style={styles.quarter_view}>
                            <TextInput

                                style={styles.quarter_textInput}
                                value={quarter}
                                onChangeText={(value) =>{setQuarter(value);
                                
                                }}
                                mode="outlined"
                                textColor = {COLORS.white_gray}
                                outlineColor={COLORS.gray_light}
                                activeOutlineColor={COLORS.green_mid}
                                cursorColor={COLORS.gray_dark}
                                placeholderTextColor={COLORS.white_gray}
                                placeholder="الحي">

                            </TextInput>

                            <TouchableOpacity>
                                <Text style={styles.edit}  
                                >تعديل
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <Text style={styles.addition_info} numberOfLines={1}>تفاصيل العنوان الإضافية</Text>
                    <TextInput
                    // keyboardType=
                         value={personalInformation}
                         onChangeText={(value) =>{setPersonalInformation(value);
                         
                         }}
                        style={styles.additional_textInput}
                        mode="outlined"
                        textColor={COLORS.black}
                        outlineColor={COLORS.gray_light}
                        activeOutlineColor={COLORS.green_mid}
                        cursorColor={COLORS.gray_dark}
                        placeholderTextColor={COLORS.black}
                        placeholder="تفاصيل العنوان الاضافية">
                        
                    </TextInput>


                    <Text style={styles.personal_info}
                     numberOfLines={1}>
                        معلوماتك الشخصية
                        </Text>

                    <Text style={styles.mobile_title} numberOfLines={1}>رقم الموبيل</Text>
                    <TextInput
                       value={mobileNumber}
                       onChangeText={(value) =>{setMobileNumber(value);
                       
                       }}
                        style={styles.mobile_textInput}
                        keyboardType="phone-pad"
                        mode="outlined"
                        textColor = {COLORS.black}
                        outlineColor={COLORS.gray_light}
                        activeOutlineColor={COLORS.green_mid}
                        cursorColor={COLORS.gray_dark}
                       
                        placeholderTextColor={COLORS.black}
                        placeholder="رقم الموبيل " >

                    </TextInput>
                    <Text style={styles.first_name_title} numberOfLines={1}>الاسم الأول</Text>
                   <ScrollView>
                    <TextInput
                         value={firstName}
                         onChangeText={(value) =>{setFirstName(value);
                         
                         }}  style={styles.first_name_textInput}
                        mode="outlined"
                        outlineColor={COLORS.gray_light}
                        activeOutlineColor={COLORS.green_mid}
                        cursorColor={COLORS.gray_dark}
                      
                        placeholderTextColor={COLORS.black}
                        placeholder="الاسم الاول">

                    </TextInput>
                    </ScrollView>
                    
                    <Text style={styles.last_name_title}
                     numberOfLines={1}>اسم العائلة</Text>
                <ScrollView>
                    <TextInput
                        value={lastName}
                        onChangeText={(value) =>{setLastName(value);
                        
                        }}  style={styles.last_name_textInput}
                        mode="outlined"
                        outlineColor={COLORS.gray_light}
                        activeOutlineColor={COLORS.green_mid}
                        cursorColor={COLORS.gray_dark}
                      
                        placeholderTextColor={COLORS.black}
                        placeholder="اسم العائلة">

                    </TextInput>
                    </ScrollView>
                    <Large_button button_name="حفظ العناوين" />
                </SafeAreaView>

            </ScrollView>
        </>
    )
}

export default Add_address;