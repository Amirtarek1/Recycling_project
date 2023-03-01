import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { COLORS , FONT, Sizes } from '../constants/index';

const Large_button = ({Confirm_press ,button_name }) => {


  return (
    <>


      <View style={styles.view_Container_TouchableOpacity}>
        <TouchableOpacity onPress={Confirm_press} style={styles.Container_TouchableOpacity}>
          <Text style={styles.Text_style}>{button_name}</Text>
        </TouchableOpacity>


      </View>



    </>
  )


}

const styles = StyleSheet.create({
  view_Container_TouchableOpacity: {
    alignItems: "center",
     justifyContent: "center", 
    alignSelf: "center",
    marginTop :RFPercentage(2)
  
  },
  Container_TouchableOpacity: {
    borderRadius: 12 ,
    alignItems: "center",
    justifyContent: "center",
    width: Sizes.width * .9 ,
    height: RFPercentage(10),
    backgroundColor: COLORS.green_mid ,
  },
  Text_style: {
    fontFamily: FONT.font_Almarai_Bold,
    color: COLORS.white,
    fontSize: 28 ,
    alignItems: "center",
    

  },
});
export default Large_button;