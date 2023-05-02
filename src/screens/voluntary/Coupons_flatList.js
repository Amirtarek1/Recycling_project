
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, FlatList, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp, Sizes } from '../../constants/themes';
// import { styles } from './Style_Donate';
import EditSvg from "../../assets/Icons/edit.svg"
import { styles } from '../Home/Style_Type_oil';

import PlusCricleSvg from "../../assets/Icons/plus.svg"

const Coupons_flatList = ({ data }) => {




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





            <FlatList
                style={{
                    marginTop: hp(4)
                }}
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={1}
                renderItem={({ item }) =>


                    <View style={[styles.shadowProp,
                    {
                        backgroundColor: COLORS.white, alignSelf: "center",
                        borderRadius: 10, margin: 10, padding: hp(2), width: w * 0.92,
                        flexDirection: "row", alignItems: "center", justifyContent: "space-between"
                    }]}>

                        {/* <View style={{width:Sizes.width*0.90,height :Sizes.height*0.16 , 
                   borderWidth:1,
                   borderRadius:12,
                   borderColor:COLORS.green_mid,
                   flexDirection:"row"
                   ,alignItems:"center",
                   elevation:0.5   
                   }}> */}
                        {/* image_containner */}
                        <View style={{
                            width: RFPercentage(8),
                            height: RFPercentage(4),
                            justifyContent: "center",
                            alignItems: "center"
                            //   borderWidth:1
                            , right: RFPercentage(1)

                        }}>
                            <Image source={item.company_logo}
                                style={{
                                    // marginTop:RFPercentage(5),
                                    width: RFPercentage(10),
                                    height: RFPercentage(10),
                                    alignSelf: "center"
                                }}
                                resizeMode="center"
                            />
                        </View>

                        {/* text_plus_min_button */}


                        <View style={{
                            // padding:RFPercentage(1),
                            // maxWidth :Sizes.width*0.4,
                            // alignSelf:"flex-start",
                            // flexDirection:"row" ,
                            // alignItems:"",
                            height: RFPercentage(12),
                            justifyContent: "space-between",
                            //  borderWidth:1 ,
                            //  width : Sizes.width*0.
                            // right:RFPercentage(2),
                            // alignSelf:"center"
                        }}>
                            <Text numberOfLines={1}
                                style={{
                                    fontSize: RFPercentage(3),
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.black,
                                    // width : Sizes.width*0.45,
                                    // alignSelf:"flex-start"
                                }}
                            >ماكدونلز خصم 25%</Text>
                            <Text numberOfLines={1}
                                style={{
                                    fontSize: RFPercentage(3),
                                    fontFamily: FONT.font_Almarai_Regular,
                                    color: COLORS.gray_white,
                                    // top : hp(1),

                                    // width : Sizes.width*0.45,
                                    alignSelf: "flex-start"
                                }}
                            >نقطة 100</Text>

                        </View>
                        <View style={{
                            justifyContent: "space-between",
                            height: RFPercentage(12),
                            // padding :hp(0.5),
                            // alignItems:"flex-start",
                            // right : RFPercentage(-1.5),
                            // borderWidth :1
                        }}>
                            <View style={{
                                // flexDirection:"row"
                            }}>
                                <Text style={{
                                    color: item.isUsed ? COLORS.gray_white : COLORS.green_mid,
                                    fontFamily: FONT.font_Almarai_Regular,
                                    fontSize: RFPercentage(3),
                                }} numberOfLines={1}>{item.isUsed ? "مستخدم" : "لم يستخدم"}</Text>


                            </View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: RFPercentage(10)
                                ,

                                //  top :RFPercentage(-2)
                                //  padding :hp(1)}
                            }}>
                                <TouchableOpacity>
                                    <EditSvg style={{ right: RFPercentage(0) }}
                                        width={RFPercentage(3)}
                                        height={RFPercentage(4)} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{
                                        color: COLORS.red_logout,
                                        fontFamily: FONT.font_Almarai_Regular,
                                        fontSize: RFPercentage(3)
                                        ,

                                        right: RFPercentage(0)
                                    }} numberOfLines={1}>تعديل </Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>



                } />


        </>
    );
};

export default Coupons_flatList;
