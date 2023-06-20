
import { Image, ScrollView, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from './Style_Type_oil';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Back_arrow from '../../components/Back_arrow';
import Cart from "../../../src/assets/Icons/cart.svg"
import Large_button from '../../components/Large_button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../constants/themes';
import Firstflatlist from './components/productlist';
import { useEffect, useState } from 'react';
import { Oils } from '../../Utils/DummyData';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, getAddresses } from '../../Redux/Reducers/AddressSlice';
import { productsFetch } from '../../Redux/Reducers/ProductSlice';


const Types_oil = () => {
    const [number, setnumber] = useState(0)
    const [data, setdata] = useState(Oils)
    const navigation = useNavigation();


    const dispatch = useDispatch();



    // useEffect(() => {
    //     // dispatch(getAddresses());
    //     // dispatch(addAddress(
    //     //     {
    //     //         title: "news try",
    //     //         address: " el-MAHALLAAAAA",
    //     //         firstName: "SHADY",
    //     //         lastName: "Tarek",
    //     //         phoneNumber: "02222222222222",
    //     //         isMain: false

    //     //     }
    //     // )
    //     // )
    //     dispatch(productsFetch())

    // }, [])
    // const { product } = useSelector((state) => state.product);
    // console.log(product, "product from TYpeOIL")



    // const { All_address } = useSelector((state) => state.Address);
    // console.log(All_address, "All_address from TYpeOIL")


    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>


                    <Back_arrow onPress={() => navigation.goBack()} />
                    <Text style={{
                        fontSize: RFPercentage(3),
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.white,
                        alignSelf: "center"
                    }}>أنواع الزيوت</Text>

                    <View>
                        <Cart onPress={() => navigation.navigate("Request_car")} height={hp(6)} width={wp(12)} fill="#fff" />
                        {number > 0 ? <View style={{
                            height: hp(3.5), width: hp(3.5),
                            backgroundColor: COLORS.min_button, borderRadius: 20,
                            justifyContent: "center"
                            , alignItems: "center", position: "absolute", top: -10, left: -8
                        }} >
                            <Text style={{ color: COLORS.gray_dark, fontSize: RFPercentage(2) }} >{number}</Text>
                        </View> : null}


                    </View>

                </View>




                <View style={styles.white_container}>

                    <Firstflatlist setnumber={setnumber} data={data} setdata={setdata} />
                    <View style={{ padding: RFPercentage(1) }}>
                        <Large_button button_name="الانتقال الي السلة" Confirm_press={() => navigation.navigate("Request_car")} />
                    </View>

                </View>


            </SafeAreaView>



        </>
    )


}

export default Types_oil;