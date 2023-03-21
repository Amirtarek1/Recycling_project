import { ScrollView, StatusBar, StyleSheet, Image,Text, View ,TouchableOpacity, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT, icons, images, Sizes } from '../../constants';
import User_image from '../../components/User_image'
import SVGICON from "../../assets/Icons/user.svg"
const Profile_list = () => {
// const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <>

<StatusBar hidden={true}/>
<View style={{
    flex : 1,
    padding:RFPercentage(2),
    // justifyContent:"space-between",
    width:Sizes.width,
    backgroundColor:COLORS.white
     }}>
        <View style={{width:Sizes.width*0.8,flexDirection:"row",justifyContent:"space-around",alignItems:"center",borderWidth:0,paddingVertical:RFPercentage(2)}}>
        <User_image/>
<View style={{paddingVertical:RFPercentage(2),justifyContent:"space-around"}}>
    <Text style={{fontFamily:FONT.font_Almarai_Bold}}>الاء محمد عبد الرازق</Text>
<Text style={{fontFamily:FONT.font_Light_noto}}>nadaaboelkheir@gmail.com  </Text>
</View>

        </View>
        <FlatList data={[{
            text_content:"معلومات الحساب"
        },
        {
            text_content:"تغيير كلمة السر"

        },
        {
            text_content:"العناوين"

        },
        {
            text_content:"قائمة الطلبات"

        },
        {
            text_content:"تغيير اللغة"

        },
        {
            text_content:"الشكاوي والإقتراحات"

        },
        {
            text_content:"الشروط والأحكام"

        },
        {
            text_content:"تسجيل الخروج"

        }]}
    renderItem={({item})=>(
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        width:Sizes.width,
        alignItems:"center",
        
        borderWidth:0,
        padding:RFPercentage(2)
         }}>
           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
           <SVGICON
            width={30}
            height={30}
            // fill = "#d0d" 
            />
          <Text style={{marginLeft:RFPercentage(1),
            fontFamily:FONT.font_Almarai_Bold,color:COLORS.black_mid}}>{item.text_content}</Text>
           </View>
        
          <SVGICON
            width={30}
            height={30}
            // fill = "#d0d"
          />
        </View>)}
    />

</View>


        </>
    );


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
    },
    style_view_content_of_user_image_nameandemail: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: RFPercentage(1) ,
         alignContent: "center"
        , alignItems: "center"
    },
    style_Text_topof_points: {
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.black,
        fontSize: 17.5,
        alignSelf: "center"
        , margin: RFPercentage(1)
    }, view_points: {
        alignSelf :"center",
        width: RFPercentage(15),
        backgroundColor: COLORS.white,
        borderWidth: RFPercentage(.25)
        , borderColor: COLORS.green_mid,
        alignItems: "center" ,
         borderRadius: RFPercentage(1.5),
    }
    , style_text_in_box_ofpoints: {
        fontSize: 27,
        fontFamily: FONT.font_Almarai_Bold,
        color: COLORS.green_mid,
        marginHorizontal: RFPercentage(1),
        height: RFPercentage(6),
        maxWidth: RFPercentage(20)
    },


})
export default Profile_list