import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LogoutModal from '../../compontent/LogoutModal'
const { height, width } = Dimensions.get("screen")

const ProfileScreen = () => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const buttonData = [
        {
            id: "1",
            lable: "MY Porfile",
            image: require("../../assets/Icon/chevronright.png"),
            screen: "Myprofile"
        },
        {
            id: "2",
            lable: "About us",
            image: require("../../assets/Icon/chevronright.png"),
            screen: "Aboutus"
        },
        {
            id: "3",
            lable: "Help & Support",
            image: require("../../assets/Icon/chevronright.png"),
            screen: "HelpAndSupportScreen"
        },
        {
            id: "4",
            lable: "Mywallet",
            image: require("../../assets/Icon/chevronright.png"),
            screen: "MyWallet"
        },
        {
            id: "5",
            lable: "Payment & method",
            image: require("../../assets/Icon/chevronright.png"),
            screen: "Payment"
        },
        {
            id: "6",
            lable: "History",
            image: require("../../assets/Icon/chevronright.png"),
            screen: "History"
        },
    ]

    const handleMenuItemPress = (screen) => {
        // Navigate to the specified screen
        navigation.navigate(screen);
    };

    const handleLogout = () => {
        navigation.navigate("LoginScreen")
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <ScrollView>
                <View style={{ alignSelf: "center" }}>
                    <Image source={require("../../assets/logo/jinnlogo.png")} style={styles.logo} resizeMode='contain' />
                </View>
                <Text style={styles.header}> Jinnuncle Panter</Text>
                <View style={{ flex: 1 }}>
                    <View style={styles.container1}>
                        {buttonData.map((button, index) => (
                            <TouchableOpacity key={button.id} style={styles.buttonContainer} onPress={() => handleMenuItemPress(button.screen)}>
                                <Text style={styles.label}>{button.lable}</Text>
                                <Image source={button.image} style={styles.icon} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => setModalVisible(true)}>
                        <Text style={styles.label}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <LogoutModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onLogout={handleLogout}
            />
        </SafeAreaView>

    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    logo: {
        width: width * 0.5,
        height: height * 0.2,
        // alignItems: "center"
    },
    header: {
        fontSize: 20,
        fontWeight: "700",
        color: "black",
        fontFamily: "Roboto-BoldItalic",
        textAlign: "center"

    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        // backgroundColor: "#FFF",
        justifyContent: "space-between",
        paddingHorizontal: 20

    },
    label: {
        fontSize: 20,
        marginRight: 10,
        color: "#000"
    },
    icon: {
        width: 20,
        height: 20,
    },
})