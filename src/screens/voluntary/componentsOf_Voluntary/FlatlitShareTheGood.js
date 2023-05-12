
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../../constants';
import { hp } from '../../../constants/themes';
import { styles } from '../Style_ShareTheGood';
import { useNavigation } from '@react-navigation/native';



const FlatlitShareTheGood = ({ data }) => {
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
                        <TouchableOpacity onPress={() => navigation.navigate(item.navi, {
                            name: item
                        })}
                            style={[styles.shadowProp, { backgroundColor: COLORS.white, height: hp(16.5), alignSelf: "center", borderRadius: 10, margin: 10, padding: hp(1), width: w * 0.92, flexDirection: "row", alignItems: "center" }]}>
                            <Image source={item.image}
                                style={{ backgroundColor: "#fff", width: hp(15), height: hp(15), alignSelf: "center" }} />

                            <View style={{ height: hp(12), justifyContent: "space-between", marginLeft: 10, }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.5), }}>{item.name}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Light, color: COLORS.black, fontSize: RFPercentage(2.5), }}>موسسة خيرية</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFPercentage(2.5), }}>نقطة {item.number_points}</Text>
                            </View>
                        </TouchableOpacity>

                    </>
                }
            />
        </>
    )
}



export default FlatlitShareTheGood;