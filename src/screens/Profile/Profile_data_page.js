import { useState } from "react"
import { ScrollView, StatusBar,ImageBackground ,StyleSheet, Dimensions,Image, Text, View, TouchableOpacity, ImageBackgroundBase } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import Back_arrow from '../../components/Back_arrow';
import User_image from '../../components/User_image'
import INputbutton from '../../components/INputbutton';
import { SafeAreaView } from "react-native-safe-area-context";
import Large_button from "../../components/Large_button";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome5"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Add_layer_icon from "../../assets/Icons/add_layer.svg"
import BottomSheet from  'react-native-simple-bottom-sheet';
const Profile_data_page = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation();
    const w = Dimensions.get("screen").width
    const[SheetOpen,setSheetOpen] = useState(false);
    const [frontDisabled , setfrontDisabled] = useState(false)    
    const [frontImage ,setFrontImage] = useState(false);
    const [ selectFrontImage,setSelectFrontImage] = useState("");
    const [hiddenSheet,setHiddenSheet] = useState(true)
  
    // const openCamera = async () => {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.CAMERA,
    //   );
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED){
    // const result = await launchCamera();  
    //   }
    // };
    let options ={
        storageOptions:{
          saveToPhoto : true,
          mediaType :"photo"
        },
      };
  // const imagePicker = () =>{
  //   launchCamera(options,response =>{
  // //  const data = 
  //  selectImage[response.assets[0].uri]
  //   // console.log(response.assets[0].uri)
  // })
  // // setSelectImage(data)
  
  // }
  
  const  CameraFrontImagePicker =  async () => {
    await launchCamera(options, response => {
        if (response.assets && response.assets.length > 0) {
            setSelectFrontImage(response.assets[0].uri);
  
        }
        setFrontImage(true)
        setHiddenSheet(true)
        // console.log(response.assets[0].uri)
    });
  };
  const  libraryFrontImagePicker =  async () => {
    await launchImageLibrary(options, response => {
        if (response.assets && response.assets.length > 0) {
            setSelectFrontImage(response.assets[0].uri);
  
        }
        setFrontImage(true)
        setHiddenSheet(true)
        // console.log(response.assets[0].uri)
    });
  };
    return (
        <>
            <StatusBar hidden={true} />
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style = {{flex :1}}>
                <View style={{
                    flexDirection: "row",
                    // borderWidth:1,
                    paddingVertical: RFPercentage(2),
                    justifyContent: "space-around", alignItems: "center"
                }}>
                    <View>
                        <Back_arrow  onPress={()=> navigation.navigate("Personal_Profile_page")} />
                    </View>
                    <View style={{ flexDirection: "row", width: Sizes.width * 0.7 }}>
                        <Text style={{ color: COLORS.black, fontFamily: FONT.font_Almarai_ExtraBold, fontSize: RFPercentage(3) }}>تعديل الملف الشخصي</Text>

                    </View>

                </View>

                <View style={{
                    // borderWidth:1,
                    flexDirection: "row",
                    justifyContent: "center",
                    // marginTop:RFPercentage(2),
                    // padding:RFPercentage(5)

                }}>
{frontImage  ?
        <>
        {/* <View 
        
        // onMouseMove={()=>{console.log("sa")}}
        style={{
            borderWidth: RFPercentage(0.6),
            borderColor : COLORS.green_mid,
            // width: RFPercentage(12)
            // , height: RFPercentage(12),
            // borderRadius: RFPercentage(6),
            justifyContent: "center",
            alignItems: "center"
       }}> */}
 {/* <TouchableOpacity onPress={()=>{
                  setFrontImage(false)
                  
                }}
                style={{relative}}
                >
                  
                          <Icon name='times' style={{
                            padding :RFPercentage(1),
                            alignSelf:"flex-start" ,
                          shadowColor:"#fff",shadowOpacity:0.4,elevation:5
                          }} size={25} color={COLORS.red_logout}/>
                </TouchableOpacity > */}
          <Image source={{uri:selectFrontImage}}
           style={{
            borderWidth: RFPercentage(0.6),
            borderColor : COLORS.green_mid,
            width: RFPercentage(12)
            , height: RFPercentage(12),
            borderRadius: RFPercentage(6),
            justifyContent: "center",
            alignItems: "center",
                // width: RFPercentage(12),
                // height: RFPercentage(12),
                alignSelf: "center",
                // tintColor : COLORS.eye_color,

            }}
            resizeMode="cover"
          />
        
                {/* <TouchableOpacity onPress={()=>{
                  setFrontImage(false)
                }}>
                  
                          <Icon name='times' style={{
                            padding :RFPercentage(1),
                            alignSelf:"flex-start" ,
                          shadowColor:"#fff",shadowOpacity:0.4,elevation:5
                          }} size={25} color={COLORS.red_logout}/>
                </TouchableOpacity > */}

        {/* </View> */}


        </> : <>

       < TouchableOpacity 
         disabled = {frontDisabled}
         onPress={()=>{
          setfrontDisabled(true)
           setHiddenSheet(false)
           setSheetOpen(true)
         }}> 
        <View
                style={{
                    borderWidth: RFPercentage(0.6),
                    borderColor : COLORS.green_mid,
                    width: RFPercentage(12)
                    , height: RFPercentage(12),
                    borderRadius: RFPercentage(6),
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                {/* <Image resizeMode="cover"
                    source={images.USER_PROFILE}
                    style={{
                        width: RFPercentage(10),
                        height: RFPercentage(10),
                        alignSelf: "center",
                        tintColor : COLORS.eye_color
                    }}
                /> */}


         <Add_layer_icon width ={30} height={30} />
            </View>
            </TouchableOpacity>



{/*         
        <View style={[,{alignItems:"center",
         shadowColor: COLORS.black,
        //  elevation: 4,
         shadowOpacity: .5,
        justifyContent:"center",
        marginVertical:RFPercentage(3),
        alignSelf:"center",
        width :Sizes.width*0.7,
            height:Sizes.height*0.22,
            // borderRadius :RFPercentage(4),
            borderWidth:1,
            borderColor : COLORS.green_mid
}]}>
         <TouchableOpacity 
         disabled = {frontDisabled}
         onPress={()=>{
          setfrontDisabled(true)
           setHiddenSheet(false)
           setSheetOpen(true)
         }}> 
         <Add_layer_icon width ={50} height={50} />
         </TouchableOpacity>
        </View> */}
        </>}

                </View>

                <View style={styles.style_view_content_of_user_image_nameandemail}>

                    <View>
                        <Text style={styles.style_Text_topof_points}>النقط الحاليه</Text>
                        <View style={styles.view_points}>
                            <Text onPress={() => alert("120")} numberOfLines={1}
                                style={styles.style_text_in_box_ofpoints}>120</Text>
                        </View>
                    </View>


                    <View >
                        <Text style={styles.style_Text_topof_points} >النقط المستخدمه</Text>
                        <View style={styles.view_points}>
                            <Text onPress={() => alert("204")} numberOfLines={1}
                                style={styles.style_text_in_box_ofpoints}>204</Text>
                        </View>
                    </View>


                </View>

                <View style={{
                    // flex: 0.75,
                     justifyContent: "space-around",
                    //  marginTop:RFPercentage(5)
                }}>
                    
                        <View style={{ 
                            marginTop: RFPercentage(2) 
                            }}>
                            <INputbutton label="الاسم" value="الاء عبد الرازق محمود" />
                            <INputbutton label="البريد الإلكتروني" value="nadaaboelkhir@gmail.com" />
                            <INputbutton label="رقم الهاتف" value="01202477442" />
                        </View>
                    


                    <View style={{ marginTop: RFPercentage(3) }}>
                        {/* navigation.navigate('Home') */}
                        <Large_button button_name="حفظ التعديلات" Confirm_press={() => navigation.navigate("Profile_list")} />
                    </View>
                    
                </View>
         
           
           
                </ScrollView>
                {   hiddenSheet? 
    <>
    
    </> : <>
    <View style={{alignSelf:"center",
    width:w,alignItems:"center",justifyContent:"center",alignSelf:"center"}}>

    <BottomSheet
   
    isOpen ={SheetOpen}
    wrapperStyle={{
      width:w*0.9,
      flex:1,
alignSelf:"center",
backgroundColor:COLORS.green,
    }}
    outerContentStyle={{backgroundColor:COLORS.white,
      alignSelf:"center"
    }}
    innerContentStyle ={{flex:1,width:w}}
    sliderMunHeight={0} onOpen={()=>{setFrontSheetOpen(true);
                // console.log("dadad")
                }} 
                onClose = {()=>{
                  setfrontDisabled(false)
                  // console.log("Close") ;
              setHiddenSheet(true)
              }}
                >
                  <TouchableOpacity
                  onPress={()=>{CameraFrontImagePicker()}}
                  style={{
                    // flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    padding:RFPercentage(2),
                  // width:w*0.8,
                  borderBottomColor:COLORS.green_mid,borderBottomWidth:1,
  justifyContent:"center",
  alignItems:"center"}}>
  <Text style={{
                     color:COLORS.gray_dark,
                     fontSize:RFPercentage(2.5),
    fontFamily:FONT.font_Almarai_Bold}}>التقاط صورة</Text>
</TouchableOpacity>

<TouchableOpacity
                  onPress={()=>{libraryFrontImagePicker()}}


style={{
                    // flex:1,
                  borderTopColor:COLORS.green_mid,
                  borderTopWidth:1,
                    padding:RFPercentage(2),
                  // width:w*0.9,
                  borderBottomColor:"#CCC",
                  // borderBottomWidth:1,
  justifyContent:"center",
  alignItems:"center"}}>
  <Text style={{
                     color:COLORS.gray_dark,
                     fontSize:RFPercentage(2.5),
    fontFamily:FONT.font_Almarai_Bold}}>معرض الصور</Text>
</TouchableOpacity>
      </BottomSheet>
      </View>

    </>
  }             
            </SafeAreaView>

     
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
        // flex: 5,
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
    },
    style_view_content_of_user_image_nameandemail: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: RFPercentage(1),
        alignContent: "center"
        , alignItems: "center"
    },
    style_Text_topof_points: {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.black,
        fontSize: RFPercentage(2.5),
        alignSelf: "center"
        , margin: RFPercentage(1)
    }, view_points: {
        alignSelf: "center",
        width: RFPercentage(15),
        backgroundColor: COLORS.white,
        borderWidth: RFPercentage(.25)
        , borderColor: COLORS.green_mid,
        alignItems: "center",
        borderRadius: RFPercentage(1.5),
    }
    , style_text_in_box_ofpoints: {
        fontSize: RFPercentage(4),
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.green_mid,
        marginHorizontal: RFPercentage(1),
        height: RFPercentage(6),
        maxWidth: RFPercentage(20)
    },
  safeAreaView:{
        flex: 1,
        // justifyContent:"space-between",
        width: Sizes.width,
        backgroundColor: COLORS.white
    }

})
export default Profile_data_page;