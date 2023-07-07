import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS, FONT } from '../../constants';
<<<<<<< HEAD
import { styles } from './StyleUncom';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { hp ,Sizes} from '../../constants/themes';
import { CompletedOrdersData, orders_Data } from '../../Utils/DummyData';
import LinearGradient from 'react-native-linear-gradient';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


=======
import { styles } from './Style_uncompleteOrders';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp, wp } from '../../constants/themes';
import {  useSelector } from 'react-redux';
>>>>>>> 33ed3bbbd041cab973c952f43f0ae365516427da

const h = Dimensions.get("screen").height;
const w = Dimensions.get("screen").width;

function CompleteOrders() {
    // Deliveryorders
    const [data,setData] = useState(CompletedOrdersData)


<<<<<<< HEAD
    return (

        <SafeAreaView style={{ flex: 1,
         backgroundColor: COLORS.white 
         }}>

            <ScrollView>
                <View style={{ 
                    alignItems: "center",
                     backgroundColor: COLORS.white
                      }}>

                    <LinearGradient
                        colors={['#AED270CE', '#F44336']}
                        style={{ flex: 1 }}
                    >
                    </LinearGradient>
                    {data.map((item, index) => (

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
=======
    const { OrdersStatusAccepted } = useSelector((state) => state.OrdersAcceptedStatus);
    console.log(OrdersStatusAccepted)
//   // .filter((item) => item.orderStatus === "ACCEPTED")
    return (   
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {OrdersStatusAccepted?.length > 0 ? (
                     OrdersStatusAccepted?.map((order) => (
                        <View
                            key={order.createdAt}
                            style={[styles.shadowProp, {
                                alignSelf: "center",
                                backgroundColor: COLORS.white,
                                borderRadius: 10,
                                marginVertical: 12,
                                padding: hp(1),
                                width: w * 0.9,
                            }]}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <Text
                                        style={{
                                            fontFamily: FONT.font_Almarai_Bold,
                                            color: COLORS.green_mid,
                                            fontSize: RFPercentage(2.5),
                                            maxWidth: RFPercentage(50),
                                        }}
                                    >
                                        تاريخ الطلب: {order.createdAt}
                                    </Text>
                                </View>
                            </View>
                            {order?.orderLines?.map((orderLine) => (
                                <View
                                    key={orderLine.id}
                                    style={{
                                        flexDirection: "row",
                                        marginVertical: 12,
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        source={{ uri: orderLine.item.imageUrl }}
                                        style={{
                                            width: hp(16),
                                            height: hp(16),
                                            borderRadius: RFPercentage(2)
                                        }}
                                        resizeMode="center"
                                    />
                                    <View style={{ marginLeft: 12 }}>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.green_mid,
                                                fontSize: RFPercentage(2.7),
                                            }}
                                        >
                                            {orderLine.item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.black,
                                                fontSize: RFPercentage(2.4),
                                            }}
                                        >
                                            الكمية: {orderLine.quantity}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: FONT.font_Almarai_Bold,
                                                color: COLORS.black,
                                                fontSize: RFPercentage(2.4),
                                            }}
                                        >
                                            نقاط: {orderLine.item.points}
                                        </Text>
>>>>>>> 33ed3bbbd041cab973c952f43f0ae365516427da
                                    </View>
                                    <Text style={{
                                        color: COLORS.gray_dark,
                                        textAlign: "center", justifyContent: "center"
                                        , fontFamily: FONT.font_Almarai_Regular
                                    }}>({item.orderData.order_serial})</Text>


                                </View>
<<<<<<< HEAD

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
=======
                            ))}
                        </View>
                    ))
                ) : (null)
                
               
                }
>>>>>>> 33ed3bbbd041cab973c952f43f0ae365516427da
            </ScrollView>
        </SafeAreaView>


    );
}

export default CompleteOrders;

<<<<<<< HEAD

export default CompleteOrders;
0
=======
>>>>>>> 33ed3bbbd041cab973c952f43f0ae365516427da
