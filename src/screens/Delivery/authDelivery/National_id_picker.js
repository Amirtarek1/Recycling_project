import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT, Sizes, images, } from '../../../constants';
import HeaderDeliveryAuth from '../../../components/HeaderDeliveryAuth';
// import { useFormik } from 'formik';
import { Text, View, Dimensions, Image,TouchableOpacity, ScrollView,PermissionsAndroid } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { hp } from '../../../constants/themes';
import Large_button from '../../../components/Large_button';
import Add_layer_icon from "../../../assets/Icons/add_layer.svg"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { styles } from '../../voluntary/Style_Donate';

  
const National_id_picker = () => {
  let options ={
    storageOptions:{
      saveToPhoto : true,
      mediaType :"photo"
    },
  };
  const [ selectImage,setSelectImage] = useState("");
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED){
  const result = await launchCamera();  
    }
  };

const imagePicker = () =>{
  launchCamera(options,response =>{
  selectImage[response.assets[0].uri]
  console.log(response.assets[0].uri)
})
}
    const w = Dimensions.get("screen").width

    return (
        <>





            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView >
                    <HeaderDeliveryAuth namePage=" صورة البطاقة" show={false}  back={true}/>

                    <View style={{ 
                      // justifyContent: "space-around", 
                      alignSelf:"center",
                      // ,height:hp(10),
          marginTop: RFPercentage(2)
          
          }}>

            <Text style={{ alignSelf: "center",
            textAlign :"center" , 
            color: COLORS.black, 
            fontFamily: FONT.font_Almarai_Regular,
            marginTop:RFPercentage(2),
            marginBottom:RFPercentage(2),
            fontSize: RFPercentage(2.6)}}>التقط صورة البطاقة الشخصية للأمام والخلف 
            
            </Text>
            <Text
              style={{ alignSelf: "center",
               color: COLORS.gray_mid,
               fontFamily: FONT.font_Almarai_Regular,
textAlign:"center",
lineHeight:RFPercentage(4),
fontSize: RFPercentage(2.6) }} 
>يجب ان تكون صوره اصلية وواضحه وليست نسخه مصورة تأكد أن تكون جميع المعلومات واضحة وأن البطاقة سارية وليست منتهية </Text>
         
        </View>
        <View style={{alignItems:"center",justifyContent:"center",marginVertical:RFPercentage(4)}}>
          <Image source={images.National_id_} style={{width :Sizes.width*0.7,
            height:Sizes.height*0.22}}/>
        </View>

        <View style={[,{alignItems:"center",
         shadowColor: COLORS.black,
         elevation: 4,
         shadowOpacity: .5,
        justifyContent:"center",
        marginVertical:RFPercentage(3),
        alignSelf:"center",
        width :Sizes.width*0.7,
            height:Sizes.height*0.22,
            // borderRadius :RFPercentage(4),
            borderWidth:2 
}]}>
         <TouchableOpacity onPress={()=>{imagePicker()}}> 
         <Add_layer_icon width ={50} height={50} />
         </TouchableOpacity>
        </View>
        
        <Large_button button_name="تأكيد"  
        //   Confirm_press={()=> 
        //     navigation.navigate("Password_reset_page")}
             />

                </ScrollView>
            </SafeAreaView>
            
        </>
    )


}

export default National_id_picker;