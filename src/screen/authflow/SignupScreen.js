import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../compontent/Header";
import TextinputComponent from "../../compontent/TextinputComponent";
import CustomButton from "../../compontent/Custombutton";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
const { height, width } = Dimensions.get("screen")

const SignupScreen = () => {
    const navigation = useNavigation();
    const data = [
        { label: 'Ac Repair', value: '1' },
        { label: 'WashingMachine Repair', value: '2' },
        { label: 'Ac installtion & uninstallation', value: '3' },
        { label: 'Refrigerator', value: '4' },
        { label: 'Repair & gas refill', value: '5' },
        { label: 'All Service', value: '6' },
        { label: 'Split AC Technician', value: '7' },
        { label: 'Window AC', value: '8' },
    ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header title={"Signup"} />
            <View style={{ alignItems: "center", marginVertical: height * 0.02 }}>
                <Image source={require("../../assets/bottomnavigatiomnimage/user5.png")} resizeMode="comtain" style={{ width: 150, height: 150 }} />
            </View>
            <ScrollView style={{ flex: 1, paddingBottom: 50 }}>
                <View style={{ marginHorizontal: 16, justifyContent: "center", marginVertical: 10 }}>
                    <TextinputComponent label={"Email"} placeholder={"Enter your email."} inputType={"email"} />
                    <TextinputComponent label={"Password"} placeholder={"Enter your password."} inputType={"password"} />
                    <TextinputComponent label={"Technician Name"} placeholder={"Enter your name."} inputType={"person"} />
                    <TextinputComponent label={"Phone number"} placeholder={"Enter your phone number."} inputType={"phone"} />
                    <TextinputComponent label={"Dealer Name"} placeholder={"Enter your Dealer Name."} inputType={"person"} />
                    <Text style={styles.textInputLabel}>Technician Type</Text>
                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown,]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>
                </View>
                <CustomButton size={"large"} backgroundColor={"#004E8C"} color={"white"} label={"Continue"} onPress={() => navigation.navigate("LoginScreen")} />
                <View style={{ alignItems: "center" }}><Text style={{ color: "black", fontSize: 18, marginTop: 10 }}>I have already Account ?<Text style={{ color: "#004E8C" }} onPress={() => navigation.navigate("SignupScreen")}> Login</Text></Text></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        padding: 16,
        alignItems: 'center',
        marginRight: 15

    },
    dropdown: {
        // height: 50,
        borderColor: "#E6E6E6",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: width * 0.86,
        paddingVertical: 13
        // paddingHorizontal: 15,
        // alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    textInputLabel: {
        color: "#393838",
        fontSize: 18,
        // marginBottom: height * 0.02,
        marginTop: 10
    },
});
