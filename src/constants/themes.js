import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
const COLORS = {
    
    black: "#000",
    white: "#FFFFFF",

    green_light :"#EDF7EA",
    green_mid : "#7DBB69",
    green : "#619902",

    gray_light: "#00000029",
    gray_mid: "#635B5B",
    gray_dark: "#707070",
    gray_ofwhite: "#949292",
    text_color: "#AAAAAA",
    text_input_border: '#0000001F',

    black_light: "#000000DE",
    eye_color: "#00000099",

    yellow:"#FEEDB5BA",

    red_logout : "#FC0909",



}

const FONT = {
    defult_font : "NotoSansArabic-VariableFont_wdth,wght",
   
};

const Sizes = {
    width,
    height,
}

export {
    COLORS,
    FONT,
    Sizes
}