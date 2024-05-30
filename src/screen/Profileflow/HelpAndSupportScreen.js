import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Header from "../../compontent/Header";
import CustomButton from "../../compontent/Custombutton";
import TextinputComponent from "../../compontent/TextinputComponent";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import { helpancontact } from "../apiconfig/Apiconfig";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height, width } = Dimensions.get("screen")

const HelpAndSupportScreen = () => {
    const navigation = useNavigation();
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('name is required'),
        mobileNumber: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]+$/, 'Must be a valid number'),
        // .min(10, 'Mobile number must be at least 10 digits')
        // .max(15, 'Mobile number cannot exceed 15 digits'),
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters'),
    });

    const handlehelpandsupport = async (values) => {
        try {
            const token = await AsyncStorage.getItem("token")
            const myHeaders = new Headers();
            myHeaders.append("token", token);
            myHeaders.append("Cookie", "ci_session=a9b1350307207cca705e3dd2a281aaad99a31f42");
            const formdata = new FormData();
            formdata.append("name", values.name);
            formdata.append("mobile", values.mobileNumber);
            formdata.append("message", values.message);
            formdata.append("user_id", "59");
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(helpancontact, requestOptions);
            const result = await response.json();
            console.log("result----->", result)
            if (result.status == 200) {
                showMessage({
                    message: result.message,
                    type: "success",
                    icon: "success"
                })
            }
        } catch (error) {
            console.log("error--->", error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Help and Support"} />
            <Formik
                initialValues={{ name: '', mobileNumber: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    console.log('Form values:', values);
                    // Handle form submission
                    handlehelpandsupport(values);
                    // Alert.alert("Success", "Your message has been sent to the admin");
                    actions.resetForm(); // Reset form after submission
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <TextinputComponent
                                label={"Name"}
                                placeholder={"Enter your name"}
                                inputType="name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            {errors.name && touched.name && <Text style={[styles.error, { marginRight: width * 0.6 }]}>{errors.name}</Text>}

                            <TextinputComponent
                                label={"Mobile Number"}
                                placeholder={"Enter your mobile number"}
                                inputType="phone"
                                onChangeText={handleChange('mobileNumber')}
                                onBlur={handleBlur('mobileNumber')}
                                value={values.mobileNumber}
                            />
                            {errors.mobileNumber && touched.mobileNumber && <Text style={[styles.error, { marginRight: width * 0.45 }]}>{errors.mobileNumber}</Text>}
                        </View>
                        <View style={styles.content}>
                            <TextInput
                                style={styles.input}
                                placeholder="Type your message here..."
                                multiline
                                numberOfLines={5}
                                onChangeText={handleChange('message')}
                                onBlur={handleBlur('message')}
                                value={values.message}
                            />
                            {errors.message && touched.message && <Text style={[styles.error, { marginRight: width * 0.2 }]}>{errors.message}</Text>}
                        </View>
                        <CustomButton
                            size={"large"}
                            backgroundColor={"#004E8C"}
                            color={"white"}
                            label={"Send Message"}
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02,
        padding: 20,
    },
    input: {
        width: "95%",
        height: 150,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        // marginBottom: 20,
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 8,
    },
});

export default HelpAndSupportScreen;
