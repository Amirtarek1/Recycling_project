
import { Image, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { styles } from './Style_Home_page';
import User_image from '../../components/User_image';
import { categories } from '../../Utils/DummyData';
import { Dimensions } from "react-native";
import Notificationicon from "../../../src/assets/Icons/Notificationicon.svg";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, hp } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import Share from 'react-native-share';

const Home_page = () => {
    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    const navigation = useNavigation();

    const handlePress = (item) => {
        if (item.link) {
            SHAre()
        } else {
            navigation.navigate(item.navi);
        }
    };

    const SHAre = async () => {
        try {
            const options = {
                title: 'React Native | A framework for building native apps using React',
                url: 'https://reactnative.dev/',
            };
            await Share.open(options);
        } catch (error) {
            Alert.alert(error.message);
        }
    };
    const FirstFlatList = () => {

        return (
            <>

                <FlatList
                    data={categories}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <>

                            <View style={{
                                alignItems: "center", marginBottom: 20, marginTop: 15,
                                justifyContent: "space-around", width: w * 0.5
                            }}>
                                <TouchableOpacity
                                    onPress={() => handlePress(item) }
                                    style={{
                                        backgroundColor: COLORS.green_light,
                                        width: w * .45, borderRadius: RFPercentage(2), padding: hp(2)
                                    }}>
                                    <View style={{ alignItems: "center" }}>
                                        <Image source={item.image}
                                            style={styles.style_image_in_touchableopacity} />
                                        <Text style={styles.style_text_in_touchableopacity}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </>


                    }
                />
            </>
        )
    }




    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={styles.green_container}>

                    <View style={styles.view_photo_and_text_style}>
                        <User_image />
                        <View >
                            <Text style={styles.text_Bold_style}>مرحبا الاء</Text>
                            <Text style={styles.text_thin_style}>النقط : 100</Text>

                        </View>
                        <View style={{ width: RFPercentage(8), alignItems: "center" }} >
                            <Notificationicon height={RFPercentage(5)} fill="#fff" />
                        </View>

                    </View>


                </View>


                <View style={styles.white_container}>

                    <View style={styles.style_of_container_for_touchableopacity}>

                        <FirstFlatList />



                    </View>



                </View>

            </SafeAreaView>


        </>
    )


}

export default Home_page;