
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';


const Confirm_page_forget_password = () => {

    return (
        <>


            <View style={{ flex: 1, alignItems: "center", backgroundColor: COLORS.background_confirm_page }}>
                <Image source={images.confirm_photo_page}
                    style={{ width: Sizes.width * .9, height: Sizes.height * .5, margin: RFPercentage(2) }} />

                <Text style={{ fontSize: 25, fontFamily: FONT.font_Almarai_Bold, color: COLORS.green_mid, margin: RFPercentage(2) }}>تم تغيير كلمه المرور بنجاح</Text>
                <View style={{ marginTop: RFPercentage(18.5), }}>
                    <Large_button button_name="تأكيد" />
                </View>

            </View>

        </>
    )


}

const styles = StyleSheet.create({


})
export default Confirm_page_forget_password;