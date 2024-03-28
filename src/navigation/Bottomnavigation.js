// Bottomnavigation.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, Image } from 'react-native';
import HomeScreen from '../screen/homeflow/HomeScreen';
import ProfileScreen from '../screen/homeflow/ProfileScreen';
const { width, height } = Dimensions.get("screen")
const Tab = createBottomTabNavigator();
const Bottomnavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#004E8C',
                tabBarStyle: {
                    height: height * 0.08,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: "#FFF",
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'My call') {
                        iconName = focused ? require('../assets/Newicon/telephoneactive.png') : require('../assets/Newicon/telephone.png');
                    } else if (route.name === 'My profile') {
                        iconName = focused ? require('../assets/bottomnavigatiomnimage/user5.png') : require('../assets/bottomnavigatiomnimage/user4.png');
                    }
                    return <Image source={iconName} style={{ width: 30, height: 30 }} />;
                },
            })}
        >
            <Tab.Screen name="My call" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="My profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Bottomnavigation;



