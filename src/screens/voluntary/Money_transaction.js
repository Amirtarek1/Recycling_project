
import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';
import { images } from '../../constants';
import { COLORS, FONT, hp, wp } from '../../constants/themes';
import { styles } from './Style_Donate';
// import { useNavigation } from '@react-navigation/native';
import WalletSvg from "../../assets/Icons/wallet.svg"
import CheckBox from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const Money_transaction = () => {
    const navigation = useNavigation();


    // const Choose_language_page = (props) => {
    // const navigation = useNavigation();
    const LANGUAGE_OPTIONS = [
        { label: 'اللغة العربية', value: 'ar' },
        { label: 'English', value: 'en' },
    ];
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [checked, setChecked] = useState(false);

    const handleLanguagePress = (value) => {
        setSelectedLanguage(value);
        setChecked(!checked)
    };


    const CurrentPoints = 3000


    const [points, setPoints] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // const navigation = useNavigation();


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



    return (
        <>
            <StatusBar hidden={true} />
            <SafeAreaView style={styles.Basic_container}>

                <View style={[styles.view_arrow_place, { marginBottom: hp(2) }]}>
                    <Back_arrow
                     onPress={() => navigation.replace("ServicesOil")}
                    />
                    <View>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_ExtraBold,
                            color: COLORS.black,
                            fontSize: 25,
                            textAlign: "center",
                            justifyContent: "center"
                        }}>تحويل الفلوس</Text>
                    </View>
                    <TouchableOpacity    onPress={()=> navigation.navigate("Archives")}   >
                        <WalletSvg height={hp(6)} width={wp(10)} fill="#000" />
                    </TouchableOpacity>
                </View>


                <View style={{
                    justifyContent: "space-around",
                    flex: 1, flexDirection: "column"
                }}>
                    <View style={{
                        alignItems: "center",
                        alignSelf: "center"
                    }}>

                        <View style={[styles.shadowProp, {
                            backgroundColor: COLORS.green_light,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: hp(2.3)
                            , borderRadius: 10, width: w * .94,
                        }]}>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.black }}>النقط الخاصه بك</Text>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.green_mid }}>{CurrentPoints}</Text>
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

                        <View style={{
                            borderBottomWidth: 1,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderEndWidth: 0,
                            borderColor: COLORS.gray_white,
                            marginTop: RFPercentage(4),
                            backgroundColor: COLORS.white,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: hp(2.3),
                            paddingHorizontal: hp(1),
                            // , borderRadius: 10, 
                            width: w * .88,
                        }}>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.black }}>المبلغ</Text>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.5), color: COLORS.green_mid }}>EG 0.00</Text>
                        </View>
                        <View style={{
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderEndWidth: 0,
                            borderColor: COLORS.gray_white,
                            marginTop: RFPercentage(2),
                            backgroundColor: COLORS.white,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: hp(2.3),
                            paddingHorizontal: hp(1),
                            // , borderRadius: 10, 
                            width: w * .88,
                        }}>
                            <Text style={{ fontFamily: FONT.font_Almarai_Bold, fontSize: RFPercentage(2.8), color: COLORS.black, alignSelf: "flex-start" }}>طريقة الأستلام</Text>
                        </View>
                        <View style={{
                            backgroundColor: COLORS.white,
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: hp(2.3)
                            , borderRadius: 10, width: w * .94,
                            borderWidth: 0
                        }}>
                            <View
                                key={value}
                                onPress={() => handleLanguagePress(value) && setChecked(!checked)}
                                style={[
                                    styles.touchableopacity_style,
                                    selectedLanguage === value && styles.selectedButton,
                                ]}>

                                <TouchableOpacity
                                    key={value}
                                    onPress={() => handleLanguagePress(value) && setChecked(!checked)}



                                    style={styles.view_outter}>
                                    {checked === true ? <View style={styles.view_inner}></View> : null}
                                </TouchableOpacity>

                                {/* <View style={styles.view_inner}></View> */}
                                <Text style={styles.buttonText}>المحفظة الإلكترونية </Text>
                            </View>
                            <View
                                key={value}
                                onPress={() => handleLanguagePress(value) && setChecked(!checked)}
                                style={[
                                    styles.touchableopacity_style,
                                    selectedLanguage === value && styles.selectedButton,
                                ]}>

                                <TouchableOpacity
                                    key={value}
                                    onPress={() => handleLanguagePress(value) && setChecked(!checked)}



                                    style={styles.view_outter}>
                                    {checked === true ? <View style={styles.view_inner}></View> : null}
                                </TouchableOpacity>

                                {/* <View style={styles.view_inner}></View> */}
                                <Text style={styles.buttonText}>الدفع كاش </Text>
                            </View>
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
                            placeholder='رقم المحفظة' />

                        {errorMessage ? <Text style={[styles.error, { fontSize: RFPercentage(2) }]}>{errorMessage}</Text> : null}

                    </View>


                        <View style={{ marginTop: hp(5), }}>
                            <Large_button button_name="تاكيد" Confirm_press={() => navigation.replace("ServicesOil")} />
                        </View>
                </View>



            </SafeAreaView>






        </>
    );
};

export default Money_transaction;
