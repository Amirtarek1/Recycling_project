import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../constants';
import HeaderDeliveryAuth from '../../../components/HeaderDeliveryAuth';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Large_button from '../../../components/Large_button';
import { FONT, hp } from '../../../constants/themes';


const Car_id_Picture = () => {






    return (
        <>





            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView>
                    <HeaderDeliveryAuth namePage="صوره الرخصه" back={true} />

                    <View style={{
                        marginTop: RFPercentage(3),
                        justifyContent: "center",
                        alignItems: "center"
                    }}>


                        <Text style={{
                            fontSize: RFPercentage(3),
                            fontFamily: FONT.font_Almarai_Bold, color: COLORS.black
                        }}>التقط صوره الي رخصة السياره الاماميه</Text>

                        <View>
                            <Text style={{
                                marginTop: RFPercentage(3),
                                fontSize: RFPercentage(2.4), textAlign: "center",
                                fontFamily: FONT.font_Almarai_Regular, color: COLORS.black
                            }}>يجب ان تكون صوره اصلية وواضحه وليست نسخه</Text>

                            <Text style={{
                                fontSize: RFPercentage(2.4), textAlign: "center",
                                fontFamily: FONT.font_Almarai_Regular, color: COLORS.black
                            }}>مصوره. تأكد ان جميع معلومات واضحه ,ان الرخصه</Text>


                            <Text style={{
                                fontSize: RFPercentage(2.4), textAlign: "center",
                                fontFamily: FONT.font_Almarai_Regular, color: COLORS.black
                            }}>ساريه وليس منتهيه الصلاحيه</Text>
                        </View>
                    </View>

                    {/* 
                    <View style={{ paddingVertical: hp(2) }}>
                        <Large_button button_name="التقط الصوره" Confirm_press={() => { }} />
                    </View> */}


                </ScrollView>
            </SafeAreaView>



        </>
    )


}

export default Car_id_Picture;