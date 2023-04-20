import React, { useState } from "react"
import { Text, View } from 'react-native';
import Back_arrow from '../../components/Back_arrow';
import { styles } from './Style_Voluntary_Archive';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatlistTouchableOpacity from './componentsOf_Voluntary/Flatlist_TouchableOpacity';
import { Voluntary_dataset } from '../../Utils/DummyData';
import { useNavigation } from '@react-navigation/native';



const Voluntary_Archive = () => {

    const [data, setdata] = useState(Voluntary_dataset)

    const navigation = useNavigation();

    return (
        <>





            <SafeAreaView style={styles.Basic_container}>
                <View style={[styles.view_arrow_and_text_style]}>
                    <Back_arrow  onPress={()=> navigation.goBack()} />
                    <View>
                        <Text style={[styles.text_Bold_style, { textAlign: "center" }]}>أرشيف التبرعات</Text>
                    </View>
                </View>
                
                    <FlatlistTouchableOpacity data={data}  />
               
            </SafeAreaView>




        </>
    )


}


export default Voluntary_Archive;