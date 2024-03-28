import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions } from "react-native";
import Header from "../../compontent/Header";
import CustomButton from "../../compontent/Custombutton";
const { height, width } = Dimensions.get("screen")


const HelpAndSupportScreen = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        // Here you can implement the logic to send the message to the admin
        if (message.trim() === "") {
            Alert.alert("Error", "Please enter your message");
            return;
        }

        // Logic to send the message goes here
        // For demonstration purposes, we'll just log the message
        console.log("Message sent to admin:", message);

        // Clear the message input field after sending
        setMessage("");
        Alert.alert("Success", "Your message has been sent to the admin");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Help and Support"} />
            <View style={styles.content}>
                {/* <Text style={styles.heading}>Help and Support</Text> */}
                <TextInput
                    style={styles.input}
                    placeholder="Type your message here..."
                    multiline
                    numberOfLines={5}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />
                {/* <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
                    <Text style={styles.buttonText}>Send Message</Text>
                </TouchableOpacity> */}
                <CustomButton size={"large"} backgroundColor={"#004E8C"} color={"white"} label={"Send Message"} onPress={handleSendMessage} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        // padding: 20,
    },
    content: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02,
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 150,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007bff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default HelpAndSupportScreen;
