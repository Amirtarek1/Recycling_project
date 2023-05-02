
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StatusBar,TextInput,TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp ,Sizes } from '../../constants/themes';
import { styles } from './Style_Donate';
import EditSvg from "../../assets/Icons/edit.svg"
import Coupons_flatList from "./Coupons_flatList"
import PlusCricleSvg from "../../assets/Icons/plus.svg"
import  {Coupons_flatListData}  from '../../Utils/DummyData';


const Discount_coupons = () => {


const [data , setData] = useState(Coupons_flatListData)

    const CurrentPoints = 3000
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [inputValue, setInputValue] = useState('');

    const onChangeText = (text) => {
        setInputValue(text);
        setErrorMessage('');
        if (isNaN(Number(text))) {
            setInputValue('');
            setErrorMessage('برجاء ادخال رقم');
        } else if (Number(text) > CurrentPoints * 1) {
            setInputValue('');
            setErrorMessage('برجاء ادخال عدد نقاط اقل من عدد نقاطك ');
        }
    };



    return (
        <>

            <SafeAreaView style={styles.Basic_container}>

            <StatusBar hidden={true} />
            <View style={{ flex: 1, backgroundColor: COLORS.white ,padding: RFPercentage(2)}}>
                        <View style={{ width: Sizes.width * .6, 
                            flexDirection: "row",
                             justifyContent: "space-between",
                             alignItems: "center",
                            }}>
                            <Back_arrow />
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, 
                                color: COLORS.black, fontSize: RFPercentage(3) }}>كوبونات الخصم</Text>

                        </View>
                        
                        {/* <View style={{ justifyContent: "space-around", flexDirection: "row" }}> */}
                    {/* <View style={{ alignItems: "center", alignSelf: "center" }}> */}

                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.green_light,
                             flexDirection: "row", 
                            justifyContent: "space-between",
                             padding: hp(2.3)
                            , borderRadius: 10,
                             width: w * .94,
                            marginTop : hp(10)
                        }]}>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold,
                                 fontSize: RFPercentage(2.5), color: COLORS.black }}>النقط الخاصه بك</Text>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold,
                                 fontSize: RFPercentage(2.5), 
                                 color: COLORS.green_mid }}>{CurrentPoints}</Text>
                        {/* </View> */}
{/* </View> */}
                        </View>
                                            </View>
<Coupons_flatList data={data}/>

                        <View style={{ alignSelf:"flex-start",
justifyContent:"space-between",
alignItems:"center",
padding:hp(2)
,margin:hp(2)
}
}>
<TouchableOpacity
                style={[
                   styles.shadowProp,
    {
   
    // elevation:4,
    // position :"absolute",
    // elevation:10,
}]}
    
    >
    <PlusCricleSvg width={RFPercentage(7)}
     height = {RFPercentage(7)} />
</TouchableOpacity>

<Text style={{fontWeight:"bold",
fontSize : RFPercentage(4) ,
 color :COLORS.green_mid}}>
    
    إنشاء كوبون</Text>
    </View>


            </SafeAreaView>






        </>
    );
};

export default Discount_coupons;
