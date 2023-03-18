
import { Image, ScrollView, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from '../Home/Style_Type_oil';
import { COLORS, FONT, images, Sizes } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native"
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';




const Request_car = () => {
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const [number , setnumber] = useState(0)
    // const [data, setdata] = useState(Oils)
   
    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>


                    <Back_arrow onPress={() => alert("sda")} />
                   <View style={{flexDirection :"row",  }}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: FONT.font_Almarai_ExtraBold,
                        color: COLORS.white,
                        alignSelf: "center"
                    }}>تأكيد</Text>
</View>


                </View>



                <View style={styles.white_container}>
                <View style={{width:Sizes.width*0.90,height :Sizes.height*0.16 , borderWidth:1,borderColor:COLORS.green_mid}}>

</View>



                    <View style={{ padding: RFPercentage(1) }}>
                    </View>
                </View>


            </SafeAreaView>



        </>
    )


}

export default Request_car;