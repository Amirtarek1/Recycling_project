import React, { useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { styles } from './Style_uncompleteOrders';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp, wp } from '../../constants/themes';
import { orders_Data } from '../../Utils/DummyData';
import Icon from 'react-native-vector-icons/FontAwesome5';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width




function UncompleteOrders() {

    const [orderarr, Setorderarr] = useState(orders_Data)
    
    function removeItemFromCart(order_id) {
        Setorderarr(orderarr => {
          const updatedCart = orderarr.filter(item => item.orders_table.order_id !== order_id);
          return updatedCart;
        });
      }



    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

            <ScrollView>
                <View style={{ alignItems: "center", backgroundColor: COLORS.white }}>

                    {orderarr.filter(function (item) {
                        return item.statues == "Waiting";
                    }).map((item, index) => (
                        <>
                            <View key={item.orders_table.order_id}
                                style={[styles.shadowProp, {
                                    backgroundColor: COLORS.white
                                    , borderRadius: 10, marginVertical: 12,
                                    padding: hp(1), flexDirection: "row",
                                    
                                //    borderWidth : 4 ,
                                }]}>
                                <Image source={item.orders_table.photo}
                                    style={{ backgroundColor: COLORS.white,
                                        width: hp(10),
                                        height: hp(10)
                                     , alignSelf: "center" ,  }} />

                                <View style={{ flexDirection: "row", margin: 5 , maxWidth : RFPercentage(36) }}>
                                    <View  >
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFValue(20, h,w) , maxWidth : RFPercentage(25)}}>{item.orders_table.name_oil_order}</Text>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(20, h,w) , maxWidth : RFPercentage(25) }}>الكميه:<Text style={{ color: COLORS.gray_dark }}>{item.orders_table.amount_oil_order} </Text></Text>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(14, h,w) , maxWidth : RFPercentage(25) }}>تاريخ الطلب:<Text style={{ color: COLORS.gray_dark }}>{item.orders_table.time_date} </Text></Text>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(14, h ,w) , maxWidth : RFPercentage(25) }}>معاد الاستلام :<Text style={{ color: COLORS.gray_dark }}>{item.orders_table.time_date_recive} </Text></Text>
                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(14, h, w) , maxWidth : RFPercentage(25) }}> مكان الاستلام :<Text style={{ color: COLORS.gray_dark }}>{item.orders_table.place_recieve} </Text></Text>
                                    </View>

                                    <View style={{ alignItems: "center"  }}>

                                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFPercentage(2.2) }}>نقطه {item.orders_table.num_points}</Text>

                                        <TouchableOpacity style = {{flexDirection : "row" }}>
                                        <Icon
                                                name= "pen" 
                                                size={hp(2)} style={{ color: COLORS.gray_dark , margin : 4 }} />
                                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.gray_dark, fontSize: RFPercentage(2.2) }}>تعديل </Text>
                                        
                                        </TouchableOpacity>

                                        <TouchableOpacity 
                                        onPress={() => removeItemFromCart(item.orders_table.order_id)}
                                        style = {{flexDirection : "row" }}> 
                                        <Icon
                                                name= "trash-alt"  
                                                size={hp(2)}  style={{ color: COLORS.red_logout , margin : 4  }} />
                                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.red_logout, fontSize: RFPercentage(2.2) }}>الغاء </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>

                        </>
                    ))}





                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default UncompleteOrders

