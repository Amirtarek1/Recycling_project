
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../../constants/themes';
import { styles } from './Style_money_archive';
import { useNavigation } from '@react-navigation/native';



const FlatList_money_archives = ({ data }) => {

    const navigation = useNavigation();

    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width


    return (
        <>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={1}
                renderItem={({ item }) =>
                    <>

                        <TouchableOpacity style={[styles.shadowProp,
                        {
                            backgroundColor: COLORS.white,
                            alignSelf: "center",
                            borderRadius: 10,
                            margin: 10,
                            padding: hp(1),
                            width: w * 0.92,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around"
                        }]}>
                            <Image source={item.image}
                                style={{
                                    width: w * 0.12,
                                    height: h * 0.06,
                                    alignSelf: "center"
                                }}
                                resizeMode="contain"
                            />

                            <View style={{
                                justifyContent: 'space-between', marginLeft: hp(-4), paddingVertical: hp(1)
                                , height: h * 0.14
                            }}>

                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(18, h) }}>{item.type_of_transaction}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(18, h) }}>التاريخ: <Text style={{ fontFamily: FONT.font_Almarai_Regular, color: COLORS.gray_dark, fontSize: RFValue(18, h) }}>{item.date}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFValue(18, h) }}>نقطة {item.number_points}</Text>
                            </View>

                            <View style={{ justifyContent: "space-between", height: hp(14) }}>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.green_mid, fontSize: RFValue(18, h)
                                }}>{item.status}</Text>
                                <Text onPress={()=> navigation.navigate("Edit_money_transaction")} style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.red_logout, fontSize: RFValue(18, h)
                                }}>تعديل</Text>

                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: COLORS.black, fontSize: RFValue(18, h)
                                }}>EG 0.00</Text>
                            </View>
                        </TouchableOpacity>

                    </>
                }
            />
        </>
    )
}



export default FlatList_money_archives;