
import { ScrollView, Image, TouchableOpacity,FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, Sizes } from '../../constants';
import Large_button from '../../components/Large_button';
import Back_arrow from '../../components/Back_arrow';
import INputbutton from '../../components/INputbutton';
import INPUTtext_password from '../../components/INPUTtext_password';
import { useFormik } from 'formik';
import { SignupSchema } from "../../Forms/Schema";
import { Sign_up_initial_values } from '../../Forms/Initial_values';
import SvgLocation from "../../assets/Icons/user.svg"

const Address_page = (props) => {
const label_data_list=
[
{
label :"الاسم",
label_content : "ألاء محمد عبدالرازق"     
},
{
label :"العنوان",
label_content : "طنطا شارع الحلو المتفرع من حسن رضوان - طنطا - الغربية"
}
,
{
    label :"رقم الهاتف",
    label_content : "+201017699452"
}
]
   
    return (
        <>

<StatusBar hidden = {true}/>
            <ScrollView style={{ backgroundColor: COLORS.white ,padding :RFPercentage(2) }}>
<View style={{flex:1 , backgroundColor:COLORS.white}}>
    <View style={{width : Sizes.width*.6,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<Back_arrow/>
<Text style={{fontFamily:FONT.font_Almarai_Bold,color:COLORS.black,fontSize:20}}>العناوين</Text>

    </View>
<View>
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:RFPercentage(4),
        marginBottom:RFPercentage(1)
        }}
        >
   <View style={{
    flexDirection:"row" ,
// alignSelf:"flex-start",
marginLeft:RFPercentage(-1),
    width : Sizes.width*0.42,
    justifyContent:"space-between",alignItems:"center"}}>
   <SvgLocation width ={40} height = {40}/>
<Text style={{
    fontFamily:FONT.font_Almarai_Bold,
    fontSize:18,color:COLORS.black
    }}>المنزل
    </Text>
<View style={{
    backgroundColor:COLORS.green_mid,
    paddingVertical:RFPercentage(0.5 ),
    paddingHorizontal:RFPercentage(0.5),
    borderRadius:RFPercentage(1),
    width:RFPercentage(8.5),
    justifyContent:"center",
    alignItems:"center"
    }}>
    <Text style={{
        fontFamily:FONT.font_Almarai_Light,
        color:COLORS.white,
        fontSize:18
        }} >
            رئيسي</Text>
</View>

   </View>

<View style={{flexDirection:"row",
// width : Sizes.width*0.2,
justifyContent:"space-between",
alignItems:"center"
}}>
<SvgLocation width ={40} height = {40}/>
<Text style={{
    fontFamily:FONT.font_Almarai_Regular,
    color:COLORS.gray_dark,
    fontSize:18
    }}  >تعديل</Text>
</View>   
   
    </View>
</View>
<View style={{
    width:Sizes.width*0.95,
    height:RFPercentage(0.1),
    alignSelf:"center",
    backgroundColor:COLORS.gray_light,
    marginBottom:RFPercentage(2),
    }}></View>

   

    <FlatList data={label_data_list}
    renderItem={({item,index})=>(
        <View
        key = {index}       
        style={{
            flexDirection:"row",
             justifyContent:"space-between",
             alignItems:"center" ,
             marginBottom :RFPercentage(3)
    }}>

       <Text style={{
           fontFamily:FONT.font_Almarai_Bold,
           color:COLORS.gray_mid,
           fontSize :18

       }}> {item.label}</Text>
       <View 
       style={{

           width:Sizes.width*0.64,
           // borderWidth:1,
           justifyContent:"center",
           alignItems:"flex-start",
           
           }}>
<Text style={{color:COLORS.gray_mid,
           fontFamily : FONT.font_Almarai_Regular,
           fontSize:16,
           maxWidth:Sizes.width*0.8*0.8
           ,lineHeight:25,
           letterSpacing:2
           }} >{item.label_content}</Text>

       </View>
   </View>
     ) }/>

<View>
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:RFPercentage(2),
        marginBottom:RFPercentage(1)
        }}
        >
   <View style={{
    flexDirection:"row" ,
// alignSelf:"flex-start",
marginLeft:RFPercentage(-1),
    width : Sizes.width*0.2,
    justifyContent:"space-between",alignItems:"center"}}>
   <SvgLocation width ={40} height = {40}/>
<Text style={{
    fontFamily:FONT.font_Almarai_Bold,
    fontSize:18,color:COLORS.black
    }}>العمل
    </Text>

   </View>
<View
 style={{
    flexDirection :"row",
    alignItems : "center" ,
    
}}>
<View style={{flexDirection:"row",
// width : Sizes.width*0.2,
justifyContent:"space-between",
alignItems:"center"
}}>
<SvgLocation width ={40} height = {40}/>
<Text style={{
    fontFamily:FONT.font_Almarai_Regular,
    color:COLORS.gray_dark,
    fontSize:18
    }}  >تعديل</Text>
</View>   

<View style={{flexDirection:"row",
// width : Sizes.width*0.2,
justifyContent:"space-between",
alignItems:"center"
}}>
<SvgLocation width ={40} height = {40}/>
<Text style={{
    fontFamily:FONT.font_Almarai_Regular,
    color:COLORS.red_logout,
    fontSize:18  }}  >حذف</Text>
</View>   


</View>
   
    </View>
</View>
<View style={{
    width:Sizes.width*0.95,
    height:RFPercentage(0.1),
    alignSelf:"center",
    backgroundColor:COLORS.gray_light,
    marginBottom:RFPercentage(2),
    }}></View>
    <FlatList data={label_data_list}
    renderItem={({item,index})=>(
        <View
        key = {index}       
        style={{
            flexDirection:"row",
             justifyContent:"space-between",
             alignItems:"center" ,
             marginBottom :RFPercentage(3)
    }}>

       <Text style={{
           fontFamily:FONT.font_Almarai_Bold,
           color:COLORS.gray_mid,
           fontSize :18

       }}> {item.label}</Text>
       <View 
       style={{

           width:Sizes.width*0.64,
           // borderWidth:1,
           justifyContent:"center",
           alignItems:"flex-start",
           
           }}>
<Text style={{color:COLORS.gray_mid,
           fontFamily : FONT.font_Almarai_Regular,
           fontSize:16,
           maxWidth:Sizes.width*0.8*0.8
           ,lineHeight:25,
           letterSpacing:2
           }} >{item.label_content}</Text>

       </View>
   </View>
     ) }/>

<View style={{paddingVertical:RFPercentage(2),
justifyContent:"space-between",
alignItems:"center",
alignSelf :"flex-start",
}}>
<TouchableOpacity>
    <View style={{ backgroundColor : COLORS.green_mid,
        width:RFPercentage(10),
        height : RFPercentage(10) ,
        borderRadius : RFPercentage(5),
        alignItems:"center",
        justifyContent : "center"
        }}>
            <Text style={{fontWeight:"bold",fontSize : RFPercentage(6) , color :COLORS.white}}>+</Text>
        </View>

</TouchableOpacity>
<Text style={{fontWeight:"bold",fontSize : RFPercentage(4) , color :COLORS.green_mid}}>
    
    إضافة عنوان</Text>

</View>
</View>

            </ScrollView>
        </>
    )
}

export default Address_page;