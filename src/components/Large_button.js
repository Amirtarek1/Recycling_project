import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import { COLORS , FONT, Sizes } from '../constants/index';

const Large_button = (props) => {


  return (
    <>


      <View style={styles.view_Container_TouchableOpacity}>
        <TouchableOpacity style={styles.Container_TouchableOpacity}>
          <Text style={styles.Text_style}>{props.button_name}</Text>
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
    fontFamily: FONT.defult_font,
    color: COLORS.white,
    fontSize: 28 ,
    alignItems: "center",
    fontWeight : "800"

  },
});
export default Large_button;