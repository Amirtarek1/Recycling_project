import React, { useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { styles } from './StyleCompleteOrder';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp, wp } from '../../constants/themes';
import { orders_Data } from '../../Utils/DummyData';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width




function CompleteOrders() {

    const [orderarr, Setorderarr] = useState(orders_Data)
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

            <ScrollView>
                <View style={{ alignItems: "center", backgroundColor: COLORS.white }}>

                    {orderarr.filter(function (item) {
                        return item.statues == "done";
                    }).map((item, index) => (
                        
                            <TouchableOpacity 
                            key={item.orders_table.id} 
                            // key={item.id}
                                style={[styles.shadowProp, {
                                    backgroundColor: COLORS.white
                                    , borderRadius: 10,
                                    width : w *0.9,
                                    marginVertical: 10,
                                    padding: hp(1), flexDirection: "row",
                                }]}>
                                <Image source={item.orders_table.photo}
                                    style={{
                                        backgroundColor: COLORS.white, width: hp(10),
                                         height: hp(10)
                                        , alignSelf: "center"
                                    }} />

                                <View style={{ justifyContent: "space-around", margin: 5 , maxWidth : RFPercentage(36) }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFValue(20, h , w) , maxWidth : RFPercentage(36)}}>{item.orders_table.name_oil_order}</Text>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFValue(20, h , w) , maxWidth : RFPercentage(36)}}> نقطه {item.orders_table.num_points}  </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(20, h, w) , maxWidth : RFPercentage(36) }}> الكميه : <Text style={{ color: COLORS.gray_dark }}>{item.orders_table.amount_oil_order} </Text></Text>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(18, h, w) , maxWidth : RFPercentage(36) }}>معاد الاستلام : <Text style={{ color: COLORS.gray_dark }}>{item.orders_table.time_date} </Text></Text>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(18, h, w) , maxWidth : RFPercentage(36) }}> مكان الاستلام : <Text style={{ color: COLORS.gray_dark }}>{item.orders_table.place_recieve} </Text></Text>
                                    </View>
                                </View>
                                
                            </TouchableOpacity>

                        
                    ))}





                </View>
            </ScrollView>

        </SafeAreaView>
    );
}



export default CompleteOrders
