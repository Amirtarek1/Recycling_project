
import { Image, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from './Style_Type_oil';
import { COLORS, FONT} from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {  Typeoil } from '../../Utils/DummyData';
import { Dimensions } from "react-native"
import Back_arrow from '../../components/Back_arrow';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Types_oil = () => {
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const FirstFlatList = () => {
        return (
            <>

                <FlatList

                    data={Typeoil}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <>
                            <View style={[styles.shadowProp, styles.style_touchableopacity_categories]} >
                                <View style={{ alignItems: "center" }}>
                                    <Image source={item.image}
                                        style={styles.style_image_in_touchableopacity} />
                                    <Text style={styles.style_text_in_touchableopacity}>{item.name}</Text>
                                    <Text style={styles.style_text_in_touchableopacit_pointsnumber}>النقط :{item.number_points}</Text>
                                    <TouchableOpacity style={{
                                        width: w * 0.4,
                                        alignItems: "center",
                                        backgroundColor: COLORS.green_mid,
                                        borderRadius: 8,
                                        paddingVertical: RFPercentage(2),
                                    }}>

                                        <Text style={styles.style_text_in_touchableopacity_toadd_to_cart}>اضافه الي السلة</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </>
                    }
                />
            </>
        )
    }

    return (
        <>





            <View style={styles.Basic_container}>
                <View style={styles.green_container}>

                    <View style={styles.view_photo_and_text_style}>
                        <Back_arrow />
                        <View style={{ alignItems: "center" }}>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: FONT.font_Almarai_ExtraBold,
                                color: COLORS.white,
                                alignSelf: "center"
                            }}>أنواع الزيوت</Text>
                        </View>

                        <View>
                        <FontAwesome5  name="shopping-cart" size = {27} color={COLORS.white} />

                        </View>

                    </View>


                </View>

                <View style={styles.white_container}>

                    <View style={styles.style_of_container_for_view}>

                <FirstFlatList />

               </View>



                 </View>

            </View>


        </>
    )


}

export default Types_oil;