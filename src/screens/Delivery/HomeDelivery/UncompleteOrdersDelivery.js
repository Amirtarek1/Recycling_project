import React, { useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT } from '../../../constants';
import { styles } from './StyleUncom';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp } from '../../../constants/themes';
import { Deliveryorders, orders_Data } from '../../../Utils/DummyData';
import LinearGradient from 'react-native-linear-gradient';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width




function UncompleteOrdersDelivery() {
    // Deliveryorders
    const [Deliveryorder] = useState(Deliveryorders)
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

            <ScrollView>
                <View style={{ alignItems: "center", backgroundColor: COLORS.white }}>

                    <LinearGradient
                        colors={['#AED270CE', '#F44336']}
                        style={{ flex: 1 }}
                    >
                    </LinearGradient>
                    {Deliveryorder.filter(function (item) {
                        return item.statues == "Waiting";
                    }).map((item, index) => (

                        <LinearGradient
                            colors={['#AED270CE', '#7DBB69']}
                            key={item.orderData.id}
                            style={[styles.shadowProp, {
                                flexDirection: "column",
                                borderRadius: 10,
                                paddingLeft: hp(1),
                                justifyContent: "space-around",
                                marginVertical: 10,
                                width: hp(46)
                            }]}>
                            <View
                                style={{
                                    paddingVertical: RFPercentage(1),
                                    borderBottomLeftRadius: 2,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 2,
                                    borderTopRightRadius: 10,
                                    width: hp(45),
                                    flexDirection: "column",
                                    backgroundColor: COLORS.white
                                }}>
                                <View style={{
                                    flexDirection: "row", justifyContent: "space-around"
                                    , paddingHorizontal: RFPercentage(2), padding: RFPercentage(1),
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        flex: 1
                                    }}>
                                        <Image source={item.orderData.image} resizeMode='center'
                                            style={{
                                                borderRadius: RFPercentage(3),
                                                width: hp(6),
                                                height: hp(6),
                                                alignSelf: "center"
                                            }} />

                                        <Text style={{
                                            fontSize: RFPercentage(2.5),
                                            color: COLORS.black, paddingHorizontal: RFPercentage(1.5)
                                            , fontFamily: FONT.font_Almarai_Regular
                                        }}>{item.orderData.name}</Text>
                                    </View>
                                    <Text style={{
                                        color: COLORS.gray_dark,
                                        textAlign: "center", justifyContent: "center"
                                        , fontFamily: FONT.font_Almarai_Regular
                                    }}>({item.orderData.order_serial})</Text>


                                </View>

                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>  كمية الزيت : <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.amount_oil}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>  رقم الهاتف: <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.phone_num}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2) }}>  العنوان: <Text style={{ color: COLORS.gray_dark, fontFamily: FONT.font_Almarai_Regular }}> {item.orderData.address}</Text></Text>

                                <View style ={{flexDirection :"row" , justifyContent :"space-around" , padding :RFPercentage(1.5)}}>
                                    <TouchableOpacity style={{ width :hp(13), backgroundColor: COLORS.green_mid,borderRadius :RFPercentage(1) }}>
                                        <Text style={{color :COLORS.white ,fontFamily :FONT.font_Almarai_Regular ,padding :RFPercentage(1),textAlign :"center" ,justifyContent:"center" , fontSize: RFPercentage(1.8) }}>تأكيد الاستلام</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{width :hp(13),backgroundColor: COLORS.red_logout,borderRadius :RFPercentage(1) }}>
                                        <Text style={{color :COLORS.white ,fontFamily :FONT.font_Almarai_Regular ,textAlign :"center" ,justifyContent:"center" ,padding :RFPercentage(1) ,fontSize: RFPercentage(1.8) }}>الغاء</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </LinearGradient>


                    ))}





                </View>
            </ScrollView>

        </SafeAreaView>
    );
}



export default UncompleteOrdersDelivery;