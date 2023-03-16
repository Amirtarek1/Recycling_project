
import { Image, ScrollView, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from './Style_Type_oil';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native"
import Back_arrow from '../../components/Back_arrow';
import Cart from "../../../src/assets/Icons/cart.svg"
import Large_button from '../../components/Large_button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../constants/themes';
import Firstflatlist from './components/productlist';
import { useState } from 'react';
import { Oils } from '../../Utils/DummyData';



const Types_oil = () => {
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const [number , setnumber] = useState(0)
    const [data, setdata] = useState(Oils)
   
    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>


                    <Back_arrow onPress={() => alert("sda")} />
                    <Text style={{
                        fontSize: 20,
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.white,
                        alignSelf: "center"
                    }}>أنواع الزيوت</Text>

                    <View>
                        
                        <Cart height={hp(6)} width={wp(12)} fill="#fff" />
                       {number > 0 ?  <View style={{
                            height: hp(3.5), width: hp(3.5),
                            backgroundColor: COLORS.min_button, borderRadius: 20,
                            justifyContent: "center"
                            , alignItems: "center", position: "absolute", top: -10, left: -8
                        }} >
                            <Text style={{ color: COLORS.gray_dark }} >{number}</Text>
                        </View> : null}
                       

                    </View>

                </View>




                <View style={styles.white_container}>


                    <Firstflatlist setnumber={setnumber}  data={data} setdata = {setdata} />

                    <View style={{ padding: RFPercentage(1) }}>
                        <Large_button button_name="أضافة الي السلة" Confirm_press={() => {} } />
                    </View>
                </View>


            </SafeAreaView>



        </>
    )


}

export default Types_oil;