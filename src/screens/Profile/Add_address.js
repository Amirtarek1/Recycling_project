
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
import { TextInput } from 'react-native-paper';

const Add_address = (props) => {
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
 
<View style={{flex:1 , backgroundColor:COLORS.white}}>
    <View style={{width : Sizes.width*.6,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<Back_arrow/>
<Text style={{fontFamily:FONT.font_Almarai_Bold,color:COLORS.black,fontSize:20}}>تفاصيل العنوان</Text>

    </View>
    <Text style={{
        marginTop:RFPercentage(2),
        fontSize:18,
        fontFamily:FONT.font_Almarai_Bold , 
        color : COLORS.gray_mid
            }}>معلومات الموقع</Text>
         <View style={{width:Sizes.width*0.4,marginTop:RFPercentage(2)}}>
          <Text style={{
            fontFamily:FONT.font_Almarai_Bold,
            color:COLORS.black,
            fontSize:16,

            }} numberOfLines={1}>طنطا - الغربية</Text> 
            </View> 
            <View style={{
                flexDirection:"row",
                // justifyContent : "space-between",
                alignItems:"center"
                }}>
<TextInput 
// contentStyle={{tec}}
// onChangeText={(value)=>{"dada"}}
style ={{
    width:Sizes.width *0.95,
    backgroundColor:"#fff",
    borderBottomWidth:0.1,
    borderColor:COLORS.gray_light
    }}
     placeholder="dadadadaa">

</TextInput>
<TouchableOpacity>
<Text style={{
    left:RFPercentage(-10),
    fontFamily:FONT.font_Almarai_Regular,
    color:COLORS.green_mid,
    fontSize:18
    }}  >تعديل
    </Text>
    </TouchableOpacity>
    </View>

          
            </View> 
            <Text style={{
            marginTop:RFPercentage(3),
            fontFamily:FONT.font_Almarai_Bold,
            color:COLORS.gray_mid,
            fontSize:16,

            }} numberOfLines={1}>تفاصيل العنوان الإضافية</Text> 
<TextInput 
// contentStyle={{tec}}
// onChangeText={(value)=>{"dada"}}
style ={{
width:Sizes.width *0.95,
backgroundColor:"#fff",
borderBottomWidth:0.1,
borderColor:COLORS.gray_light 
}} 
placeholderTextColor={COLORS.black}
    placeholder="dadadadaa">

</TextInput>


<Text style={{
            marginTop:RFPercentage(3),
            fontFamily:FONT.font_Almarai_Bold,
            color:COLORS.gray_mid,
            fontSize:16,

            }} numberOfLines={1}>معلوماتك الشخصية</Text>

<Text style={{
            marginTop:RFPercentage(3),
            fontFamily:FONT.font_Almarai_Bold,
            color:COLORS.gray_light,
            fontSize:14,

            }} numberOfLines={1}>رقم الموبايل</Text> 
<TextInput 
// contentStyle={{tec}}
// onChangeText={(value)=>{"dada"}}
style ={{
width:Sizes.width *0.95,
backgroundColor:"#fff",
borderBottomWidth:0.1,
borderColor:COLORS.gray_light 
}} 
placeholderTextColor={COLORS.black}
    placeholder="dadadadaa">

</TextInput>
<Text style={{
            marginTop:RFPercentage(3),
            fontFamily:FONT.font_Almarai_Bold,
            color:COLORS.gray_light,
            fontSize:14,

            }} numberOfLines={1}>الاسم الأول</Text> 
<TextInput 
// contentStyle={{tec}}
// onChangeText={(value)=>{"dada"}}
style ={{
width:Sizes.width *0.95,
backgroundColor:"#fff",
borderBottomWidth:0.1,
borderColor:COLORS.gray_light 
}} 
placeholderTextColor={COLORS.black}
    placeholder="dadadadaa">

</TextInput><Text style={{
            marginTop:RFPercentage(3),
            fontFamily:FONT.font_Almarai_Bold,
            color:COLORS.gray_light,
            fontSize:14,

            }} numberOfLines={1}>اسم العائلة</Text> 
<TextInput 
// contentStyle={{tec}}
// onChangeText={(value)=>{"dada"}}
style ={{
width:Sizes.width *0.95,
backgroundColor:"#fff",
borderBottomWidth:0.1,
borderColor:COLORS.gray_light ,
marginBottom :RFPercentage(4)
}} 
placeholderTextColor={COLORS.black}
    placeholder="dadadadaa">

</TextInput>
<Large_button button_name = "حفظ العناوين"/>
</View>

            </ScrollView>
        </>
    )
}

export default Add_address;