
import {  Image, TouchableOpacity,  Text, View, FlatList } from 'react-native';
import { styles } from './Style_Home_page';
import { COLORS , icons } from '../../constants';
import Large_button from '../../components/Large_button';
import { RFPercentage } from 'react-native-responsive-fontsize';
import User_image from '../../components/User_image';
import { categories } from '../../Utils/DummyData';
import { Dimensions } from "react-native"


const Home_page = () => {
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    
    const FirstFlatList = () => {
        return (
            <>

                <FlatList

                    data={categories}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <>
                            <TouchableOpacity style={[styles.shadowProp, styles.style_touchableopacity_categories]} >
                                <View style={{ alignItems: "center" }}>
                                    <Image source={item.image}
                                        style={styles.style_image_in_touchableopacity} />
                                    <Text style={styles.style_text_in_touchableopacity}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </>
                    }
                />
            </>
        )
    }

    return (
        <>





            <View style={styles.Basic_container}>
                <View style={styles.green_container}>

                    <View style={styles.view_photo_and_text_style}>
                        <User_image />
                        <View style = {{marginRight : w *0.25 }}>
                            <Text style={styles.text_Bold_style}>مرحبا الاء</Text>
                            <Text style={styles.text_thin_style}>النقط : 100</Text>

                        </View>
                        <View style={{ width :w*0.1 }} >
                            <Image source={icons.bell_icone}
                                style={{
                                    width: RFPercentage(8),
                                    height: RFPercentage(8),
                                    tintColor: COLORS.white
                                }} />
                        </View>

                    </View>


                </View>


                <View style={styles.white_container}>

                    <View style={styles.style_of_container_for_touchableopacity}>

                        <FirstFlatList />

                    </View>

                   

                </View>

            </View>


        </>
    )


}

export default Home_page;