import * as React from 'react';
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';


const Location_of_user = () => {



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
              <Text style={styles.text_title_name}>العناوين</Text>
            </View>

          </View>

          <View>
            <View style={{ flexDirection: "row", margin: RFPercentage(2), justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                <Image source={icons.Back_right_arrow} style={{ width: 20, height: 20, marginLeft: 20 }} />
                <Text>المنزل</Text>
                <Text>الرئيسي</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image source={icons.Back_right_arrow} style={{ width: 20, height: 20 }} />
                <Text style={ styles.style_text }>تعديل</Text>
              </View>
            </View>
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
  },style_text : {
    
  }
  
})

export default Location_of_user;