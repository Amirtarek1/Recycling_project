
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp, Sizes } from '../../constants/themes';
import { styles } from './Style_Donate';
import EditSvg from "../../assets/Icons/edit.svg"
import Coupons_flatList from "./Coupons_flatList"
import PlusCricleSvg from "../../assets/Icons/plus-circle.svg"
import { Coupons_flatListData } from '../../Utils/DummyData';
import { useNavigation } from '@react-navigation/native';


const Discount_coupons = () => {
    const navigation = useNavigation();


    const [data, setData] = useState(Coupons_flatListData)

    const CurrentPoints = 3000
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [inputValue, setInputValue] = useState('');

    const onChangeText = (text) => {
        setInputValue(text);
        setErrorMessage('');
        if (isNaN(Number(text))) {
            setInputValue('');
            setErrorMessage('برجاء ادخال رقم');
        } else if (Number(text) > CurrentPoints * 1) {
            setInputValue('');
            setErrorMessage('برجاء ادخال عدد نقاط اقل من عدد نقاطك ');
        }
    };



    return (
        <>

            <SafeAreaView style={styles.Basic_container}>

                <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Back_arrow onPress={() => navigation.navigate("Home")} />
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Text style={{

                                fontFamily: FONT.font_Almarai_Bold,
                                color: COLORS.black, fontSize: RFPercentage(3.5)
                            }}>كوبونات الخصم</Text>
                        </View>
                    </View>

                  
                </View>

                <Coupons_flatList
                    data={data} />

                <View style={{
                    alignSelf: "flex-start",
                    alignItems: "center",
                    padding: hp(2)
                    , margin: hp(2)
                }
                }>
                    <TouchableOpacity onPress={() =>navigation.navigate("Offers")} >

                        <PlusCricleSvg width={RFPercentage(7)}
                            height={RFPercentage(7)}
                        />
                    </TouchableOpacity>

                    <Text style={{
                        fontFamily: FONT.font_Almarai_Bold,
                        fontSize: RFPercentage(4),
                        color: COLORS.green_mid
                    }}>

                        إنشاء كوبون</Text>
                </View>


            </SafeAreaView>






        </>
    );
};

export default Discount_coupons;
