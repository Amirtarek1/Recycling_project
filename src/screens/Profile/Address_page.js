
import { ScrollView, TouchableOpacity, FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import SvgLocation from "../../assets/Icons/user.svg"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { hp } from '../../constants/themes';

const Address_page = (props) => {
    // const navigation = useNavigation();

    const label_data_list =
        [
            {
                label: "الاسم",
                label_content: "ألاء محمد عبدالرازق"
            },
            {
                label: "العنوان",
                label_content: "طنطا شارع الحلو المتفرع من حسن رضوان - طنطا - الغربية"
            }
            ,
            {
                label: "رقم الهاتف",
                label_content: "+201017699452"
            }
        ]

    return (
        <>

            <StatusBar hidden={true} />
            <ScrollView style={{ backgroundColor: COLORS.white }}>
                <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, padding: RFPercentage(2) }}>
                    <View style={{ width: Sizes.width * .6, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Back_arrow onPress={() => navigation.goBack()} />
                        <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(3.5) }}>العناوين</Text>

                    </View>
                    <View >
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: RFPercentage(4),
                           
                            marginBottom: RFPercentage(1)
                        }}
                        >
                            <View style={{
                                flexDirection: "row",
                                // alignSelf:"flex-start",
                                marginLeft: RFPercentage(-1),
                                width: Sizes.width * 0.42,
                                justifyContent: "space-between", alignItems: "center"
                            }}>
                                <SvgLocation width={40} height={40} />
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    fontSize: RFPercentage(2.5), color: COLORS.black
                                }}>المنزل
                                </Text>
                                <View style={{
                                    backgroundColor: COLORS.green_mid,
                                    paddingVertical: RFPercentage(0.5),
                                    paddingHorizontal: RFPercentage(0.5),
                                    borderRadius: RFPercentage(1),
                                    width: RFPercentage(8.5),
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontFamily: FONT.font_Almarai_Light,
                                        color: COLORS.white,
                                        fontSize: RFPercentage(2.4),
                                    }} >
                                        رئيسي</Text>
                                </View>

                            </View>

                            <View style={{
                                flexDirection: "row",
                                // width : Sizes.width*0.2,
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <SvgLocation width={hp(5)} height={hp(5)} />
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Regular,
                                    color: COLORS.gray_dark,
                                    fontSize: RFPercentage(2.5),
                                }}  >تعديل</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        borderWidth: RFPercentage(0.2),
                        width: Sizes.width * 0.95,
                        alignSelf: "center",
                        backgroundColor: COLORS.gray_light,
                        marginBottom: RFPercentage(2),
                    }}></View>



                    <FlatList data={label_data_list}
                        renderItem={({ item, index }) => (
                            <View
                                key={index}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: RFPercentage(3)
                                }}>

                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.gray_mid,
                                    fontSize: RFPercentage(2.5),

                                }}> {item.label}</Text>
                                <View
                                    style={{

                                        width: Sizes.width * 0.64,
                                        // borderWidth:1,
                                        justifyContent: "center",
                                        alignItems: "flex-start",

                                    }}>
                                    <Text style={{
                                        color: COLORS.gray_mid,
                                        fontFamily: FONT.font_Almarai_Regular,
                                        fontSize: RFPercentage(2.8),
                                        maxWidth: Sizes.width * 0.8 * 0.8
                                        , lineHeight: 25,
                                        letterSpacing: 2
                                    }} >{item.label_content}</Text>

                                </View>
                            </View>
                        )} />

                    <View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: RFPercentage(2),
                            marginBottom: RFPercentage(1)
                        }}
                        >
                            <View style={{
                                flexDirection: "row",
                                // alignSelf:"flex-start",
                                // marginLeft: RFPercentage(-1),
                                width: Sizes.width * 0.2,
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <SvgLocation width={40} height={40} />
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    fontSize: RFPercentage(3), color: COLORS.black
                                }}>العمل
                                </Text>

                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",

                                }}>
                                <View style={{
                                    flexDirection: "row",
                                    // width : Sizes.width*0.2,
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <SvgLocation width={40} height={40} />
                                    <Text style={{
                                        fontFamily: FONT.font_Almarai_Regular,
                                        color: COLORS.gray_dark,
                                        fontSize: RFPercentage(3),
                                    }}  >تعديل</Text>
                                </View>

                                <View style={{
                                    flexDirection: "row",
                                    // width : Sizes.width*0.2,
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <SvgLocation width={40} height={40} />
                                    <Text style={{
                                        fontFamily: FONT.font_Almarai_Regular,
                                        color: COLORS.red_logout,
                                        fontSize: RFPercentage(3),
                                    }}  >حذف</Text>
                                </View>


                            </View>

                        </View>
                    </View>
                    <View style={{
                        borderWidth: RFPercentage(0.2),
                        width: Sizes.width * 0.95,
                        alignSelf: "center",
                        backgroundColor: COLORS.gray_light,
                        marginBottom: RFPercentage(2),
                    }}></View>
                    <FlatList data={label_data_list}
                        renderItem={({ item, index }) => (
                            <View
                                key={index}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: RFPercentage(3)
                                }}>

                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.gray_mid,
                                    fontSize: RFPercentage(2.5),

                                }}> {item.label}</Text>
                                <View
                                    style={{

                                        width: Sizes.width * 0.64,
                                        // borderWidth:1,
                                        justifyContent: "center",
                                        alignItems: "flex-start",

                                    }}>
                                    <Text style={{
                                        color: COLORS.gray_mid,
                                        fontFamily: FONT.font_Almarai_Regular,
                                        fontSize: RFPercentage(2.6),
                                        maxWidth: Sizes.width * 0.8 * 0.8
                                        , lineHeight: 25,
                                        letterSpacing: 2
                                    }} >{item.label_content}</Text>

                                </View>
                            </View>
                        )} />

                    <View style={{
                        paddingVertical: RFPercentage(2),
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignSelf: "flex-start",
                    }}>
                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: COLORS.green_mid,
                                width: RFPercentage(10),
                                height: RFPercentage(10),
                                borderRadius: RFPercentage(5),
                                alignItems: "center",

                            }}>
                                <Text style={{ fontSize: RFPercentage(7), color: COLORS.white }}>+</Text>
                            </View>

                        </TouchableOpacity>
                        <Text style={{ fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(3), color: COLORS.green_mid }}>

                            إضافة عنوان</Text>

                    </View>
                </SafeAreaView>

            </ScrollView>
        </>
    )
}

export default Address_page;