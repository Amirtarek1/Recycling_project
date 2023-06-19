
import {
    Image, ScrollView,
    TouchableOpacity, Animated, TouchableHighlight, Text, View, FlatList
} from 'react-native';
import { styles } from '../Home/Style_Type_oil';
import { COLORS, FONT, images, Sizes } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native"
import Back_arrow from '../../components/Back_arrow';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { hp } from '../../constants/themes';
import PlusCricleSvg from "../../assets/Icons/plus-circle.svg"
import Dialog_component from '../../components/Dialog_component';
import { CartData } from "../../Utils/DummyData"
import Cart_flatList from "./Cart_flatList"
import HiddenItemWithActions from "./HiddenItemsWithActions"
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Dialog } from 'react-native-simple-dialogs';
const Request_car = () => {
    const navigation = useNavigation();
    const [isModalVisable, setISModalVisible] = useState(false)
   
    const [data, setData] = useState(CartData.map((cartData, index) => ({
        key: `${index}`,
        numOfBottles: cartData.numOfBottles,
        numOfPoints: cartData.numOfPoints
    })))
    const renderVisibleItem = (data, rowMap) => {
        return (
            <Cart_flatList data={data}
                onNumberOfBottlesIncrement={() => numberOfBottlesIncrement(rowMap, data.item.key)}
                onNumberOfBottlesDecrement={() => numberOfBottlesDecrement(rowMap, data.item.key)}
            />
        );
    }


    const renderHiddenItem = (data, rowMap) => {
        return (
            <HiddenItemWithActions
                data={data}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        );
    }
    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow(rowMap, rowKey)
        }
    }


    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = data.filter(item => item.key !== rowKey);
        setData(newData);
    };


    const numberOfBottlesIncrement = (rowMap, rowKey) => {
        const newData = [...data];
        newData[rowKey].numOfBottles += 1

        setData(newData)
    }
    const numberOfBottlesDecrement = (rowMap, rowKey) => {
        const newData = [...data];
        if (newData[rowKey].numOfBottles)
            newData[rowKey].numOfBottles -= 1

        setData(newData)
    }
    return (
        <>

            <SafeAreaView style={styles.Basic_container}>

                <View style={styles.green_container}>



                    <Back_arrow onPress={() => navigation.goBack()} />
                    <Text style={{
                        fontSize: 20,
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.white,
                        alignSelf: "center"
                    }}>عربة الطلبات</Text>
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home_page")}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontFamily: FONT.font_Almarai_ExtraBold,
                                color: COLORS.white,
                                alignSelf: "center"
                            }}>تأكيد</Text>
                        </TouchableOpacity>
                    </View>

                </View>



                <View style={styles.white_container}>
                    <SwipeListView
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderVisibleItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={0}
                        rightOpenValue={-150}
                    />


                    <View style={{
                        alignSelf: "center",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: hp(2)
                    }
                    }>
                        <TouchableOpacity
                            onPress={() => setISModalVisible(true)}


                            style={[

                                styles.shadowProp,
                                {
                                    elevation: 4,
                                    elevation: 10,
                                }]}

                        >
                            <PlusCricleSvg width={RFPercentage(7)}
                                height={RFPercentage(7)}
                            />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            fontSize: RFPercentage(4),
                            color: COLORS.green_mid
                        }}>

                            إضافة طلب</Text>
                    </View>
                </View>
                <Dialog
                    dialogStyle={{ borderRadius: hp(1), alignSelf: "flex-end" }}
                    visible={isModalVisable}
                    onTouchOutside={() => setISModalVisible(true)}>
                    <View style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: hp(1.5),

                        height: Sizes.height * 0.16,
                        //  borderRadius :hp(3)
                    }}>

                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFValue(18, Sizes.height) }}>هل أنت متأكد من حذف الطلب ؟</Text>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center", justifyContent: "space-around", width: Sizes.width * 0.5
                        }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setISModalVisible(false)
                                    // navigation.goBack()
                                }}

                                style={[styles.shadowProp, {
                                    width: hp(8),
                                    height: hp(6),
                                    borderRadius: hp(1),
                                    padding: hp(1),
                                    backgroundColor: COLORS.red_logout,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }]}>
                                <Text style={{
                                    color: COLORS.white,
                                    fontFamily: FONT.font_Almarai_Regular
                                }}>نعم</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setISModalVisible(false)
                                    navigation.navigate("Home_page")

                                }}

                                style={[styles.shadowProp, {
                                    shadowColor: COLORS.green_mid,
                                    width: hp(8),
                                    height: hp(6),
                                    borderRadius: hp(1),
                                    padding: hp(1),
                                    backgroundColor: COLORS.accent,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }]}>
                                <Text style={{
                                    color: COLORS.green_mid,
                                    fontFamily: FONT.font_Almarai_Regular
                                }}>لا</Text>

                            </TouchableOpacity>

                        </View>
                    </View>
                </Dialog>
            </SafeAreaView>



        </>
    )


}

export default Request_car;
