
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, Sizes} from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import { TextInput } from '@react-native-material/core';

const Signup_page1 = () => {


    return (
        <>



            <ScrollView>

            <View style={styles.Basic_container}>
                <View style={styles.green_container}>

                    <View style={styles.view_arrow_and_text_style}>
                        <View>
                            <Text style={styles.text_Bold_style}>إنشاء حساب</Text>
                            <Text style={styles.text_thin_style}>إنشاء حساب جديد في التطبيق</Text>

                        </View>
                        <Back_arrow />

                    </View>


                </View>

                
                    <View style={styles.white_container}>

                        <TextInput
                            style={{ margin: 30 , borderColor : "#f00"  }}
                            
                            label="الاسم"
                            variant="outlined"

                        />
                          <TextInput
                            style={{ margin: 30, }}
                            label="الاسم"
                            variant="outlined"

                        />
                          <TextInput
                            style={{ margin: 30, }}
                            label="الاسم"
                            variant="outlined"

                        />
                          
                     

                    </View>
                
            </View>



            </ScrollView>
        </>
    )


}

const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid
        , alignContent: "center"
    }, green_container: {
        flex: 1,
        backgroundColor: COLORS.green_mid,
    },
    white_container: {
        flex: 5,
        backgroundColor: COLORS.white,
        borderTopEndRadius: RFPercentage(8),
        borderTopStartRadius: RFPercentage(8)
    }, text_Bold_style: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    }, text_thin_style: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: FONT.defult_font,
        marginLeft: RFPercentage(6)
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }


})
export default Signup_page1;