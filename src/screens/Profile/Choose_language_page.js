
import * as React from 'react';
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import Large_button from '../../components/Large_button';

// import { RadioButton } from 'react-native-paper';

const Choose_language_page = (props) => {

    const [checked, setChecked] = React.useState('اللغه العربيه');


    return (
        <>
            <StatusBar backgroundColor={COLORS.black} />

            <ScrollView style={{ backgroundColor: COLORS.white }}>

                <View style={styles.Basic_container}>

                    <View style={styles.view_arrow_and_text_style}>

                        <Back_arrow />

                        <View style={{
                            alignSelf: "center", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={styles.text_title_name}>اختار اللغه</Text>
                        </View>

                    </View>

                    {["اللغه العربيه", "اللغه الانجليزيه"].map((choose , index ) =>
                        <TouchableOpacity key={choose} onPress={() => setChecked(choose)} 
                        style={[styles.touchableopacity_style , {borderColor:  checked == "اللغه العربيه" ? "#00d" : "#0dd" } ]}>
                            <View style={styles.view_outter}>
                                {checked === choose && <View style={styles.view_inner} ></View>}
                            </View>

                            <Text style={{
                                textAlign: "center", justifyContent: "center",
                                alignSelf: "center", marginLeft: RFPercentage(5)
                            }}>{choose}</Text>

                        </TouchableOpacity> )}

                    <View style={{ marginTop: RFPercentage(4) }}>
                        <Large_button button_name="تأكيد" />
                    </View>
                </View>


            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    Basic_container: {
        flex: 1,
        backgroundColor: COLORS.white,
    }, text_title_name: {
        fontFamily: FONT.font_Almarai_ExtraBold,
        color: COLORS.black,
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        width: Sizes.width * 0.85,
    },
    view_arrow_and_text_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: RFPercentage(2),
        marginTop: RFPercentage(4)
    }, touchableopacity_style: {
        backgroundColor: COLORS.white
        , padding: RFPercentage(3.1),
        flexDirection: "row",
        margin: RFPercentage(2),
        borderWidth: 2,
        borderRadius: RFPercentage(1.5)

    }, view_outter: {
        backgroundColor: COLORS.white, width: 25, height: 25
        , borderRadius: 15, borderWidth: 1, alignItems: "center",
        justifyContent: "center"
    }, view_inner: {
        backgroundColor: COLORS.green_mid, alignSelf: "center",
        justifyContent: "center", width: 16, height: 16
        , borderRadius: 8
    }
})

export default Choose_language_page;