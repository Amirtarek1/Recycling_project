
import { Image, Dimensions,TouchableOpacity,Text,View,FlatList } from 'react-native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT,Sizes,hp } from '../../constants/themes';
// import { styles } from './Style_money_archive';
import { styles } from '../Home/Style_Type_oil';
import DeleteSvg from "../../assets/Icons/delete.svg"

import CloseSvg from "../../assets/Icons/close.svg"
import EditSvg from "../../assets/Icons/edit.svg"
const HiddenItemsWithActions = props => {
 const {onClose,onDelete } = props

    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    return (
        <>



                    <>
<View style={[styles.shadowProp, ,
                     { backgroundColor: COLORS.green_light, alignSelf: "center", 
                     borderRadius: 10, margin: 10, padding: hp(2), width: w * 0.92,flex:1 ,height:"100%",
                         flexDirection: "row", alignItems: "center", justifyContent:"flex-start"}]}>
<View   style={{flexDirection: "row",alignItems:"center",justifyContent:"center"}}>
<TouchableOpacity style={{right :10}}

              onPress={onDelete}
            >
              <DeleteSvg width={RFPercentage(7)}
     height = {RFPercentage(7)} />           
        </TouchableOpacity>
        
        <TouchableOpacity 
              onPress={onClose}
              style={{backgroundColor:COLORS.green_light,left :10,top:5}}>
              <CloseSvg width={RFPercentage(7)}

     height = {RFPercentage(6.5)} />           
        </TouchableOpacity>
</View>
             

</View>


                     
                    </>
       
       </>
    )
}



export default HiddenItemsWithActions;





// import { Image, Dimensions,TouchableOpacity,Text,View,FlatList } from 'react-native';
// import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';
// import { COLORS, FONT,Sizes,hp } from '../../constants/themes';
// // import { styles } from './Style_money_archive';
// import { styles } from '../Home/Style_Type_oil';
// import PlusSvg from "../../assets/Icons/plus.svg"
// import MinusSvg from "../../assets/Icons/minus.svg"
// import EditSvg from "../../assets/Icons/edit.svg"
// const Cart_flatList = ({data}) => {
 
//     const h = Dimensions.get("screen").height
//     const w = Dimensions.get("screen").width
//     return (
//         <>

//             <FlatList
//                 showsVerticalScrollIndicator={true}
//                 data={data}
//                 numColumns={1}
//                 renderItem={({ item }) =>

//                     <>
// <TouchableOpacity style={[styles.shadowProp, ,
//                      { backgroundColor: COLORS.white, alignSelf: "center", 
//                      borderRadius: 10, margin: 10, padding: hp(2), width: w * 0.92, 
//                      flexDirection: "row", alignItems: "center" ,justifyContent:"space-between"}]}>

//                 {/* <View style={{width:Sizes.width*0.90,height :Sizes.height*0.16 , 
//                     borderWidth:1,
//                     borderRadius:12,
//                     borderColor:COLORS.green_mid,
//                     flexDirection:"row"
//                     ,alignItems:"center",
//                     elevation:0.5   
//                     }}> */}
//                         {/* image_containner */}
//                        <View style={{ 
//                     width:RFPercentage(14) ,
//                      height:RFPercentage(14),
//                           justifyContent:"center",
//                           alignItems:"center" 
//                         //   borderWidth:1
//                         ,right:RFPercentage(3)

//                           }}> 
//                 <Image source={require("../../assets/Images/type_oil.png")}
//                  resizeMode="center"
//                   />
// </View>

// {/* text_plus_min_button */}


// <View style={{ 
//     padding:RFPercentage(1),
//     justifyContent:"space-around",
//      alignItems:"flex-end",
//     //  borderWidth:1 ,
//      width : Sizes.width*0.45
// ,right:RFPercentage(6)
//      }}>
// <Text numberOfLines={1}
// style={{  
// fontSize:RFPercentage(3),
// fontFamily:FONT.font_Almarai_Bold,
// color:COLORS.green_mid,    
// width : Sizes.width*0.4
// }}
// >زيت طعام 3  كيلو </Text>
// <View style = {{
    
//  minWidth:RFPercentage(18),
// height:RFPercentage(10),
// maxWidth :Sizes.width*0.4,
// alignSelf:"flex-start",
// flexDirection:"row" ,
// alignItems:"center",
// justifyContent:"space-between"}}>
//     <TouchableOpacity style={styles.shadowProp}>
//     <PlusSvg width={RFPercentage(7)} height = {RFPercentage(7)} />
// </TouchableOpacity>
// <Text style={{
//     color :COLORS.black ,
//     fontFamily : FONT.font_Almarai_Bold,
//     fontSize:RFPercentage(3),
//     maxWidth:Sizes.width*0.2 ,}} numberOfLines={1} >{item.numOfBottles}</Text>
//   <TouchableOpacity style={styles.shadowProp}>
//     <MinusSvg width={RFPercentage(7)} height = {RFPercentage(7)} />
// </TouchableOpacity>

// </View>
//                     </View>
// <View style = {{justifyContent :"space-between",height:RFPercentage(15),
// padding :hp(0.5),alignItems:"flex-start",
// right : RFPercentage(4),
// // borderWidth :1
// }}>
// <View style={{flexDirection:"row" }}>
//     <Text style={{
//     color :COLORS.black ,
//     fontFamily : FONT.font_Almarai_Bold,
//     fontSize:RFPercentage(3),
//     }} numberOfLines={1}>نقط </Text>
//    <Text style={{
//     color :COLORS.black ,
//     fontFamily : FONT.font_Almarai_Bold,
//     fontSize:RFPercentage(3),
//     maxWidth:Sizes.width*0.12 ,}} numberOfLines={1}> {item.numOfPoints} </Text>
// </View>
// <View style={{flexDirection:"row" ,
//  alignItems :"center",
//  justifyContent:"space-between",
//  width :RFPercentage(12)
//  ,
 
//  top :RFPercentage(-2)
// //  padding :hp(1)}
//  } }>
// <TouchableOpacity>
//     <EditSvg style = {{right :RFPercentage(1)}} 
//     width ={RFPercentage(3)} 
//     height = {RFPercentage(4)}  />
// </TouchableOpacity>
//     <TouchableOpacity>
//     <Text style={{
//     color :COLORS.red_logout ,
//     fontFamily : FONT.font_Almarai_Bold,
//     fontSize:RFPercentage(3)
//     ,
    
//     right :RFPercentage(1)
//      }} numberOfLines={1}>تعديل </Text>
//      </TouchableOpacity>
//  </View>


// </View>
// </TouchableOpacity>


                     
//                     </>
//                 }
//             />
//         </>
//     )
// }



// export default Cart_flatList;