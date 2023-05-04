
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView,TouchableOpacity ,TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp,Sizes } from '../../constants/themes';
import { styles } from './Style_Donate';
import { useNavigation } from '@react-navigation/native';
import { Dialog } from 'react-native-simple-dialogs';
import CorrectSvg from "../../assets/Icons/correct.svg"


const Donate = () => {




    const CurrentPoints = 3000
    const [isModalVisable, setISModalVisible] = useState(false)
    const [points, setPoints] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();


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

    const Confirm_press = () => {
        if (inputValue === '') {
            setErrorMessage('برجاء ادخال عدد النقاط');
        } else {
setISModalVisible(true)        }
    };


    return (
        <>

            <SafeAreaView style={styles.Basic_container}>

                <View style={[styles.view_arrow_place]}>
                    <Back_arrow 
                    onPress={() => navigation.goBack()}
                     />
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
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.black }}>النقط الخاصه بك</Text>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.green_mid }}>{CurrentPoints}</Text>
                        </View>

                        <View style={{ marginTop: hp(4), width: w * 0.94, alignSelf: "center", alignItems: "center" }}>

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
                                    fontSize: RFPercentage(2.5),
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

                        <TextInput

                            style={{
                                fontSize: RFPercentage(2.5),
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


                            onChangeText={onChangeText}
                            keyboardType="numeric"
                            placeholderTextColor={COLORS.gray_dark}
                            placeholder='عدد النقط المتبرع بها' />
                        {errorMessage ? <Text style={[styles.error, { fontSize: RFPercentage(2) }]}>{errorMessage}</Text> : null}




                    </View>
                    <ScrollView>

                         {/* navigation.navigate('ShareTheGoodPage') */}
                        <View style={{ marginTop: hp(5) }}>
                            <Large_button button_name="تبرع الان" Confirm_press={Confirm_press} />
                        </View>
                    </ScrollView>
                </View>

                <Dialog
                    dialogStyle={{ borderRadius: hp(1), alignSelf: "flex-end" }}
                    visible={isModalVisable}
                    onTouchOutside={() => setISModalVisible(true)}>
                    <View style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: hp(1.5),

                        // height: Sizes.height * 0.16,
                        //  borderRadius :hp(3)
                    }}>

<CorrectSvg width={RFPercentage(10)}
                                height={RFPercentage(10)}
                                 />

                        <Text style={{ fontFamily: FONT.font_Almarai_Bold,
                            color:COLORS.black,fontSize:RFPercentage(3.5),
                            marginVertical:RFPercentage(2) }}>تم التبرع بنجاح</Text>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center", justifyContent: "space-around",
                             width: Sizes.width * 0.75
                        }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setISModalVisible(false)
                                    navigation.goBack()
                                }}

                                style={[styles.shadowProp, {
                                    width: hp(12),
                                    height: hp(6),
                                    borderRadius: hp(1),
                                    padding: hp(1),
                                    backgroundColor: COLORS.white,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }]}>
                                <Text style={{
                                    color: COLORS.green_mid,
                                    fontFamily: FONT.font_Almarai_Bold,
                                    fontSize:RFPercentage(2.3)

                                }}>تم</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setISModalVisible(false)
                                    navigation.navigate('Voluntary_Archive')
                                }}

                                style={[styles.shadowProp, {
                                    width: hp(12),
                                    height: hp(6),
                                    borderRadius: hp(1),
                                    padding: hp(1),
                                    backgroundColor: COLORS.green_mid,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }]}>
                                <Text style={{
                                    color: COLORS.white,
                                    fontFamily: FONT.font_Almarai_Bold,
                                    fontSize:RFPercentage(2.3)
                                }}>الأرشيف</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </Dialog>

            </SafeAreaView>






        </>
    );
};

export default Donate;
