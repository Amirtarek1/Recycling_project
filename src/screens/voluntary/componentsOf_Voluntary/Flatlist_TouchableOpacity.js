
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../../constants';
import { hp } from '../../../constants/themes';
import { styles } from '../Style_Voluntary_Archive';



const FlatlistTouchableOpacity = ({data}) => {


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

                        <TouchableOpacity style={[styles.shadowProp, , { backgroundColor: COLORS.white, alignSelf: "center", borderRadius: 10, margin: 10, padding: hp(1), width: w * 0.92, flexDirection: "row", alignItems: "center" }]}>
                            <Image source={item.image}
                                style={{ width: w * 0.26, height: h * 0.1, alignSelf: "center" }} />

                            <View style={{ justifyContent: 'space-between', marginLeft: 10, }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(18, h) }}>{item.name}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFValue(18, h) }}>التاريخ: <Text style={{ fontFamily: FONT.font_Almarai_Regular, color: COLORS.gray_dark, fontSize: RFValue(18, h) }}>{item.date}</Text></Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFValue(18, h) }}>نقطة {item.number_points}</Text>
                            </View>
                        </TouchableOpacity>

                    </>
                }
            />
        </>
    )
}



export default FlatlistTouchableOpacity;