
import { Image, Dimensions, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { styles } from './Style_Offers';
import { COLORS, FONT } from '../../constants';
import { hp } from '../../constants/themes';
// import { useNavigation } from '@react-navigation/native';
import AutoSizeText from 'react-native-auto-size-text';



const Flatlist_Copones = ({ data }) => {
    // const navigation = useNavigation();


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
                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.white, height: hp(16.5), width: hp(48),
                            alignSelf: "center", borderRadius: 10, margin: 10, padding: hp(1),
                            flexDirection: "row", alignItems: "center"
                        }]}>

                            <Image source={item.image}
                                style={{ backgroundColor: "#fff", width: hp(12), height: hp(12), alignSelf: "center" }} />

                            <View style={{ padding : RFPercentage(1) , justifyContent :"center" , marginLeft :5  }}>
                            
                            
                                <View style = {{flexDirection : "row" , justifyContent :"center"}}>
                            
                                <Text   style={{fontFamily: FONT.font_Almarai_Bold, color: COLORS.black, fontSize: RFPercentage(2.5), padding: RFPercentage(1) }}>{item.name}</Text>
                                <Text  style={{fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, fontSize: RFPercentage(2.3), padding: RFPercentage(1) }}>نقطة {item.number_points}</Text>
                            
                                </View>

                                <TouchableOpacity style={[styles.shadowProp,{ backgroundColor: COLORS.green_mid , width : hp(15), padding: RFPercentage(1.4) , borderRadius : 15 }]}>
                                    <Text style ={{textAlign : "center" , fontSize : RFPercentage(2.4) , fontFamily : FONT.font_Almarai_Regular}}>بدل الان</Text>
                                </TouchableOpacity>
                           
                            </View>

                        </View>
                    </>
                }
            />
        </>
    )
}


//  onPress={() => navigation.navigate(item.navi, {
//     name: item
// })}

export default Flatlist_Copones;