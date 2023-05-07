import { TouchableOpacity, StyleSheet, Dimensions, Text, View } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, FONT } from '../constants/index';
import BackarrowWhiteSVG from "../../src/assets/Icons/backWhiteArrow.svg"
import { hp } from '../constants/themes';
import { SafeAreaView } from 'react-native-safe-area-context';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const HeaderDeliveryAuth = ({ onPress ,namePage }) => {


    return (
        <>


            <SafeAreaView style={{
                backgroundColor: COLORS.green_mid, 
                width: w * 1,
            }}>

                <View style={{ paddingTop : RFPercentage(4) ,padding: RFPercentage(2), flexDirection: "row", justifyContent: "space-between" }}>
                  
                    <View style={{ flexDirection: "row", }}>


                        <TouchableOpacity onPress={onPress} style = {{marginRight :6}} >
                            <BackarrowWhiteSVG height={hp(6)} width={hp(4)} />
                        </TouchableOpacity>

                        <Text style={{
                            fontSize: RFPercentage(3.8),
                            fontFamily: FONT.font_Almarai_Bold, color: COLORS.white
                        }}>{namePage}</Text>
                    </View>

                    <Text style={{
                        fontSize: RFPercentage(4),
                        fontFamily: FONT.font_Almarai_Bold, color: COLORS.white
                    }} >RE-OiL</Text>

                </View>
            </SafeAreaView>

        </>
    )
}
const styles = StyleSheet.create({


})

export default HeaderDeliveryAuth;