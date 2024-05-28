import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import Header from "../../compontent/Header";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("screen")
const Myprofile = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={"My profile"} />
            <View style={{ alignItems: "center", marginVertical: height * 0.02 }}>
                <Image source={require("../../assets/bottomnavigatiomnimage/user5.png")} resizeMode="comtain" style={{ width: 150, height: 150 }} />
            </View>
            <ScrollView>
                <View style={styles.continer}>
                    <Text style={styles.text}>Email :</Text>
                    <Text style={styles.text2}>garimayadav@gmail.com</Text>
                </View>
                <View style={styles.continer}>
                    <Text style={styles.text}>Technician Name :</Text>
                    <Text style={styles.text2}>Garima yadav</Text>
                </View>
                <View style={styles.continer}>
                    <Text style={styles.text}>Phone Number :</Text>
                    <Text style={styles.text2}>garimayadav@gmail.com</Text>
                </View>
                <View style={styles.continer}>
                    <Text style={styles.text}>Password :</Text>
                    <Text style={styles.text2}>hdajhd@123</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Changepassword")}>
                        <Image source={require("../../assets/Icon/edit-text.png")} style={{ width: 20, height: 20, marginLeft: width * 0.25 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.continer}>
                    <Text style={styles.text}>Dealer Name:</Text>
                    <Text style={styles.text2}>hwjfdks</Text>
                </View>
                <View style={styles.continer}>
                    <Text style={styles.text}>Technician Type :</Text>
                    <Text style={styles.text2}>Ac repair</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Myprofile;

const styles = StyleSheet.create({
    continer: {
        flexDirection: "row",
        columnGap: 10,
        borderBottomWidth: 2,
        borderBottomColor: "lightgray",
        marginVertical: height * 0.03,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 17
    },
    text2: {
        color: "drakgray",
        fontWeight: "bold",
        fontSize: 17
    }
})


