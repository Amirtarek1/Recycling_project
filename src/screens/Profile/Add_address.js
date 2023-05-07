import React from "react"
import { ScrollView, TouchableOpacity, Text, View,useState } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const Add_address = (props) => {
    const navigation = useNavigation();
    const [quarter ,setQuarter] = React.useState ("")
    const [addressDetails,setAddresDetails] = React.useState("")


    return (
        <>

            <ScrollView >
                <SafeAreaView style={{ flex: 1,
                 backgroundColor: COLORS.white,
                     padding: RFPercentage(2)
                      }}>

                    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Back_arrow onPress={() => navigation.goBack()} />
                            <View style = {{flex: 1 , alignItems :"center"}}>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold, color: COLORS.black,
                                    fontSize: RFPercentage(3.5)
                                }}>تفاصيل العنوان</Text>
                            </View>
                        </View>
                        <Text style={{
                            marginTop: RFPercentage(2),
                            fontSize: RFPercentage(2.5),
                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.gray_mid
                        }}>معلومات الموقع</Text>
                        <View style={{ marginTop: RFPercentage(2) }}>
                            <Text style={{
                                fontFamily: FONT.font_Almarai_Bold,
                                color: COLORS.gray_white,
                                fontSize: RFPercentage(2.5),

                            }} numberOfLines={1} >طنطا - الغربية</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <TextInput

                                style={{
                                    width: Sizes.width * 0.95,
                                    backgroundColor: "#fff",
                                    borderTopWidth: 0,
                                    borderBottomWidth: 0.1,
                                    borderColor: COLORS.gray_light,
                                    fontFamily: FONT.font_Almarai_Bold,
                                    fontSize: RFPercentage(2.5),
                                    borderWidth:0

                                }}
                                value={quarter}
                                onChangeText={(value) =>{setQuarter(value);
                                
                                }}
                                mode="flat"
                                textColor="#635B5B"
                                outlineColor={COLORS.gray_light}
                                activeOutlineColor={COLORS.green_mid}
                                cursorColor={COLORS.gray_dark}
                                placeholderTextColor={COLORS.gray_mid}
                                placeholder="الحي">
                            </TextInput>

                            <TouchableOpacity>
                                <Text style={{
                                    left: RFPercentage(-10),
                                    fontFamily: FONT.font_Almarai_Regular,
                                    color: COLORS.green_mid,
                                    fontSize: RFPercentage(2.5),
                                }}  >تعديل
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <Text style={{
                        marginTop: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_Bold,
                        color: COLORS.gray_mid,
                        fontSize: RFPercentage(2.4),

                    }} numberOfLines={1}>تفاصيل العنوان الإضافية</Text>
                    <TextInput
                     
                        value={addressDetails}
                        onChangeText={(value) => {
                        setAddresDetails(value);
                      
                        }}
                        style={{
                            width: Sizes.width * 0.95,
                            backgroundColor: "#fff",
                            borderBottomWidth: 0.1,
                            borderColor: COLORS.gray_light
                        }}
                        mode="flat"

                        textColor="#635B5B"
                        outlineColor={COLORS.gray_light}
                        activeOutlineColor={COLORS.green_mid}
                        cursorColor={COLORS.gray_dark}
                        placeholderTextColor={COLORS.gray_mid}
                        placeholder="تفاصيل العنوان الاضافية">
                        
                    </TextInput>


                    <Text style={{
                        marginTop: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_Bold,
                        color: COLORS.gray_mid,
                        fontSize: RFPercentage(2.5),

                    }} numberOfLines={1}>معلوماتك الشخصية</Text>

                    <Text style={{
                        marginTop: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_Bold,
                        color: COLORS.gray_light,
                        fontSize: RFPercentage(2.5),

                    }} numberOfLines={1}>رقم الموبيل</Text>
                    <TextInput
                        // contentStyle={{tec}}
                        // onChangeText={(value)=>{"dada"}}
                        style={{
                            width: Sizes.width * 0.95,
                            backgroundColor: "#fff",
                            borderBottomWidth: 0.1,
                            borderColor: COLORS.gray_light,
                            fontFamily: FONT.font_Almarai_Bold,
                        }}
                        placeholderTextColor={COLORS.black}
                        placeholder="رقم الموبيل " >

                    </TextInput>
                    <Text style={{
                        marginTop: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_Bold,
                        color: COLORS.gray_light,
                        fontSize: RFPercentage(2.5),

                    }} numberOfLines={1}>الاسم الأول</Text>
                    <TextInput
                        // contentStyle={{tec}}
                        // onChangeText={(value)=>{"dada"}}
                        style={{
                            width: Sizes.width * 0.95,
                            backgroundColor: "#fff",
                            borderBottomWidth: 0.1,
                            borderColor: COLORS.gray_light
                        }}
                        placeholderTextColor={COLORS.black}
                        placeholder="الاسم الاول">

                    </TextInput><Text style={{
                        marginTop: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_Bold,
                        color: COLORS.gray_light,
                        fontSize: RFPercentage(2.5),

                    }} numberOfLines={1}>اسم العائلة</Text>
                    <TextInput
                        // contentStyle={{tec}}
                        // onChangeText={(value)=>{"dada"}}
                        style={{
                            width: Sizes.width * 0.95,
                            backgroundColor: "#fff",
                            borderBottomWidth: 0.1,
                            borderColor: COLORS.gray_light,
                            marginBottom: RFPercentage(4)
                        }}
                        placeholderTextColor={COLORS.black}
                        placeholder="اسم العائلة">

                    </TextInput>
                    <Large_button button_name="حفظ العناوين" />
                </SafeAreaView>

            </ScrollView>
        </>
    )
}

export default Add_address;