import React, { useState } from 'react';
import { TouchableOpacity, Text, View, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import { COLORS, FONT, hp, wp, } from '../../constants/themes';
import { Share_The_Good_Dataset } from '../../Utils/DummyData';
import FlatlitShareTheGood from './componentsOf_Voluntary/FlatlitShareTheGood';
import { styles } from './Style_ShareTheGood';
import Archive from "../../../src/assets/Icons/Archive_icone.svg"
import Search from "../../../src/assets/Icons/search_icone.svg"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';


const ShareTheGoodPage = () => {

    const navigation = useNavigation();
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const [data, setdata] = useState(Share_The_Good_Dataset)
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const filteredData = data.filter(item => item.name.includes(searchQuery));

    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>


                    <Back_arrow 
                    onPress={() => navigation.replace("ServicesOil")} 
                    />
                    <View>
                        <Text style={{
                            fontSize: RFPercentage(2.5),
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.white,
                        }}>شارك في الخير</Text>
                        <Text style={{
                            fontSize:  RFPercentage(2.3),
                            fontFamily: FONT.font_Almarai_Regular,
                            color: COLORS.white,
                            // paddingTop: hp(1)
                        }}>اتبرع بنقاطك بكل سهوله في الخير</Text>

                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate("Voluntary_Archive")} >
                        <Archive height={hp(6)} width={wp(10)} fill="#fff" />
                    </TouchableOpacity>

                </View>




                <View style={styles.white_container}>


                    <View style={ [ {borderWidth: 2, 
                        borderColor: COLORS.green_mid ,
                        borderRadius: 10, 
                          marginBottom: 5,
                           width: w * 0.9 , 
                          flexDirection :"row" 
                          ,justifyContent :"space-between" }]}>
                        <TextInput
                            style={{
                                color :COLORS.text_color,
                                width: w * 0.75 ,
                                 padding : hp(1.5),
                                fontSize:  RFPercentage(2.5),
                                fontFamily: FONT.font_Almarai_Regular,
                            }}

                            onChangeText={handleSearch}
                            value={searchQuery}
                            placeholder="ابحث عن مؤسسه خيريه"
                            placeholderTextColor={COLORS.text_color}
                        />
                        <View style = { [ styles.shadowProp , {backgroundColor : COLORS.green_mid 
                            ,alignItems :"center" , justifyContent :"center" , borderRadius : 6  }]} >
                            <Search height={hp(4.8)} width={wp(14)} fill="#fff" />
                        </View>

                    </View>

                    <FlatlitShareTheGood data={filteredData} />


                </View>


            </SafeAreaView>



        </>
    )


}

export default ShareTheGoodPage;