
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

const Request_car = () => {
    const navigation = useNavigation();



    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const [number, setnumber] = useState(0)
    // const [data, setdata] = useState(CartData)
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



                    <Back_arrow onPress={() => navigation.goBack()}/>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.white,
                        alignSelf: "center"
                    }}>عربة الطلبات</Text>
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Home_page")}>
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
                        alignSelf: "flex-start",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // padding: hp(2)
                        // ,
                         margin: hp(2)
                    }
                    }>
                        <TouchableOpacity
                            style={[
                                styles.shadowProp,
                                {
                                    elevation:4,
                                    elevation:10,
                                }]}

                        >
                            <PlusCricleSvg width={RFPercentage(7)}
                                height={RFPercentage(7)}
                                 />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily : FONT.font_Almarai_Bold,
                            fontSize: RFPercentage(4),
                            color: COLORS.green_mid
                        }}>

                            إضافة طلب</Text>
                    </View>
                </View>

                <Dialog_component />
            </SafeAreaView>



        </>
    )


}

export default Request_car;
