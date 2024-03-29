import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/authflow/Splash';
import SignupScreen from '../screen/authflow/SignupScreen';
import LoginScreen from '../screen/authflow/LoginScreen';
import Otp from '../screen/authflow/Otp';
import Bottomnavigation from './Bottomnavigation';
import Aboutus from '../screen/Profileflow/Aboutus';
import Myprofile from '../screen/Profileflow/Myprofile';
import HelpAndSupportScreen from '../screen/Profileflow/HelpAndSupportScreen';
import MyWallet from '../screen/Profileflow/MyWallet';
import CallDetails from '../screen/callDetails/CallDetails';
import Add from '../screen/callDetails/Add';
import Change from '../screen/callDetails/Change';
import QRScreen from '../compontent/QRScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} />
                <Stack.Screen name="HelpAndSupportScreen" component={HelpAndSupportScreen} />
                <Stack.Screen name="Aboutus" component={Aboutus} />
                <Stack.Screen name="Myprofile" component={Myprofile} />
                <Stack.Screen name="MyWallet" component={MyWallet} />
                <Stack.Screen name="CallDetails" component={CallDetails} />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="Change" component={Change} />
                <Stack.Screen name="QRScreen" component={QRScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
