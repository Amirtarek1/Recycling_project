
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../../constants';
import { hp } from '../../../constants/themes';
import { styles } from '../Style_ShareTheGood';



const FlatlitShareTheGood = ({data}) => {


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

                        <TouchableOpacity style={[styles.shadowProp,{ backgroundColor: COLORS.white ,height : hp(16.5) , alignSelf: "center", borderRadius: 10  ,margin: 10, padding: hp(1), width: w * 0.92, flexDirection: "row", alignItems: "center" }]}>
                            <Image source={item.image}
                                style={{backgroundColor :"#fff" ,  width: w * 0.3, height: h * 0.1, alignSelf: "center" }} />

                            <View style={{ height :hp(12) ,justifyContent :"space-between" , marginLeft: 10, }}>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold ,color: COLORS.black, fontSize: RFValue(18, h) }}>{item.name}</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Light, color: COLORS.black, fontSize: RFValue(20, h) }}>موسسة خيرية</Text>
                                <Text style={{ fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFValue(18, h) }}>نقطة {item.number_points}</Text>
                            </View>
                        </TouchableOpacity>

                    </>
                }
            />
        </>
    )
}



export default FlatlitShareTheGood;