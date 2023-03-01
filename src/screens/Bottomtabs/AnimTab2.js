import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from './Icons';
import Colors from './Colors';
import * as Animatable from 'react-native-animatable';
import Styles from './Styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native"
import Signup_page1 from '../Auth/Change_password1';
import Forgetpassword1 from '../Auth/Forgetpassword1';
import Home_page from '../Home/Home_page';
import { COLORS, FONT } from '../../constants';
import Testpage1 from '../../Test_pages/Testpage1';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width
const TabArr = [
  { route: 'الرئيسية', label: 'الرئيسية', type: Icons.Feather, icon: 'home', component: Signup_page1 },
  { route: 'shop', label: 'shop', type: Icons.Feather, icon: 'briefcase', component: Forgetpassword1 },
  { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'clock', component: Testpage1 },
  { route: 'الملف الشخصي', label: 'الملف الشخصي', type: Icons.FontAwesome, icon: 'user-circle-o', component: Home_page },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={Styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} size = {27} color={focused ? Colors.white : COLORS.gray_ofwhite} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AnimTab2() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#00d",
  },
  tabBar: {
    height: h * 0.08,
    flexDirection :"row",
    justifyContent :"space-around",
    // position: 'absolute',
    alignSelf: "center",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.green_mid,
    borderRadius: 25,
  },
  text: {
    fontSize: 11,
    fontFamily : FONT.font_Almarai_ExtraBold ,
    textAlign: 'center',
    color: COLORS.green_mid,
  }
})