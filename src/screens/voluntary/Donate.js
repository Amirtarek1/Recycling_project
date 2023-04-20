
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp } from '../../constants/themes';
import { styles } from './Style_Donate';

const Donate = () => {


    const [CurrentPoints, setCurrentPoints] = useState(3000);

    
    const [points, setPoints] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(
        [
            { label: 'تبرع عام', value: 'تبرع عام' },
            { label: 'صدقه جاريه', value: 'صدقه جاريه' },
            { label: "سهم معدات طبيه", value: "سهم معدات طبيه" },
            { label: "زكاه", value: "زكاه" },
            { label: "سهم عمليه طفل", value: "سهم عمليه طفل" },

        ]
    );



    return (
        <>

            <SafeAreaView style={styles.Basic_container}>

                <View style={[styles.view_arrow_place]}>
                    <Back_arrow />
                </View>

                <View  >
                    <Image source={images.Elorman_foundation_logo}
                        style={styles.style_image} />
                </View>
                <View style={{ justifyContent: "space-around", flex: 1, flexDirection: "column" }}>
                    <View style={{ alignItems: "center", alignSelf: "center" }}>

                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.green_light, flexDirection: "row", justifyContent: "space-between", padding: hp(2.3)
                            , borderRadius: 10, width: w * .94, 
                        }]}>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFValue(20, h), color: COLORS.black }}>النقط الخاصه بك</Text>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFValue(20, h), color: COLORS.green_mid }}>{CurrentPoints}</Text>
                        </View>


                        <TextInput

                            style={{
                                // backgroundColor: "#00d",
                                fontSize: RFValue(20, h),
                                fontFamily: FONT.font_Almarai_Regular,
                                color: COLORS.gray_dark,
                                alignSelf: "center",
                                padding: hp(2),
                                marginTop: hp(4),
                                width: w * .94,
                                borderRadius: 8,
                                borderColor: COLORS.green_mid,
                                borderWidth: 2,

                            }}
                            // value={points}

                            onChangeText={ 
                                (text) => {
                                    const numericValue = Number(text);
                                    console.log(numericValue)
                                    console.log(CurrentPoints)
                                    setErrorMessage('');
                                    if (isNaN(numericValue)) {
                                        setPoints('');
                                        setErrorMessage('برجاء ادخال رقم ');
                                    } else if (numericValue >= CurrentPoints*1) {
                                        setPoints(text);
                                        setErrorMessage('برجاء ادخال عدد نقاط صحيح ');
                                    }
                                }
                            
                        
                        }
                        keyboardType="numeric"
                        placeholderTextColor={COLORS.gray_dark}
                            placeholder='عدد النقط المتبرع بها' />
                        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}


                        <View style={{marginTop: hp(4), width: w * 0.94, alignSelf: "center", alignItems: "center" }}>

                            <DropDownPicker
                                style={[styles.shadowProp, {
                                    height: hp(8),
                                    borderRadius: 8,
                                    borderColor: COLORS.green_mid,
                                    borderWidth: 2,
                                    backgroundColor: COLORS.white,

                                }]}
                                labelProps={{
                                    numberOfLines: 1,

                                }}

                                textStyle={{
                                    fontSize: RFValue(20, h),
                                    fontFamily: FONT.font_Almarai_Regular
                                    , color: COLORS.gray_dark,

                                }}

                                dropDownContainerStyle
                                ={[styles.shadowProp, {
                                    borderRadius: 8,
                                    backgroundColor: COLORS.white,
                                    borderTopEndRadius: 8
                                    , borderTopStartRadius: 8,
                                    marginTop: 20,
                                    borderColor: COLORS.green_mid,
                                    borderWidth: 2,
                                    
                                }]}

                                placeholder="برنامج التبرع "
                                isRTL={true}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                listMode="MODAL"

                            />




                        </View>

                    </View>
                    <ScrollView>

                        <View style={{ marginTop: hp(5) }}>
                            <Large_button button_name="تبرع الان" Confirm_press={() => { }} />
                        </View>
                    </ScrollView>
                </View>



            </SafeAreaView>






        </>
    );
};

export default Donate;
