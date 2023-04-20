import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes } from '../../constants';
import User_image from '../../components/User_image'
import { ProfilePagedata } from '../../Utils/DummyData';
import { useState } from 'react';
import { hp } from '../../constants/themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width




const Profile_list = () => {
    const navigation = useNavigation();

    const [data, setdata] = useState(ProfilePagedata)



    return (
        <>

            <SafeAreaView style={{
                flex: 1,
                padding: RFPercentage(2),
                width: Sizes.width,
                backgroundColor: COLORS.white
            }}>
                <View style={{
                    width: Sizes.width * 0.9, flexDirection: "row", justifyContent: "space-around",
                    alignItems: "center", paddingVertical: RFPercentage(2)
                }}>
                    <User_image />

                    <View style={{ justifyContent: "space-around"  , marginLeft : RFPercentage(2) }}>
                        <Text style={{ fontFamily: FONT.font_Almarai_Bold,color : COLORS.black, fontSize: RFPercentage(2.5) }}>الاء محمد عبد الرازق</Text>
                        <Text style={{ fontFamily: FONT.font_Almarai_Light, color : COLORS.black ,fontSize: RFPercentage(2.5) }}>nadaaboelkheir@gmail.com  </Text>
                    </View>

                </View>
              
                <FlatList 
                showsVerticalScrollIndicator={false}
                data={data}
                scrollEnabled={false}
                style = {{maxHeight : hp(57.2)}}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.navi)}
                            style={{
                                // backgroundColor :"#0dd",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                            <View style={{ paddingVertical: hp(2), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                                <Icon
                                    name={item.icone}
                                    size={hp(4.2)} style={{ color: COLORS.green_mid }} />

                                <Text style={{
                                    marginLeft: RFPercentage(2.5),
                                    fontSize: RFPercentage(2.2),
                                    fontFamily: FONT.font_Almarai_Bold,
                                    color: item.id == 8 ? COLORS.red_logout : COLORS.black_mid
                                }}>{item.text_content}</Text>

                            </View>
                            <Icon name="angle-left" size={30} style={{ color: COLORS.green_mid }} />

                        </TouchableOpacity>


                    )}
                />
                  <TouchableOpacity
                    onPress={() => navigation.replace("Auth")}
                    style={{
                        // backgroundColor :"#00d",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <View style={{ paddingVertical: hp(2), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                        <Icon
                            name= "sign-out"
                            size={hp(4.2)} style={{ color: COLORS.green_mid }} />

                        <Text style={{
                            marginLeft: RFPercentage(2.5),
                            fontSize: RFPercentage(2.2),
                            fontFamily: FONT.font_Almarai_Bold,
                            color: COLORS.red_logout 
                        }}>تسجيل الخروج</Text>

                    </View>
                    <Icon name="angle-left" size={30} style={{ color: COLORS.green_mid }} />

                </TouchableOpacity>


              
                
            </SafeAreaView>


        </>
    );


}

const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center"
    }, green_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 5,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    },
    style_view_content_of_user_image_nameandemail: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: RFPercentage(1),
        alignContent: "center"
        , alignItems: "center"
    },


})
export default Profile_list