import { View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../compontent/Custombutton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import TextinputComponent from '../../compontent/TextinputComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loginapi, techniciantyp } from '../apiconfig/Apiconfig';
import { showMessage } from 'react-native-flash-message';
const { height, width } = Dimensions.get("screen")
const LoginScreen = () => {
    const navigation = useNavigation();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });
    const handleLogin = async (values) => {
        try {
            const formdata = new FormData();
            formdata.append("email", values.email);
            formdata.append("password", values.password);
            formdata.append("device_id", "654654654");
            formdata.append("firebase_token", "f5s6a4f65as4f654sa56f4sa65fsaafafafa");
            const requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(Loginapi, requestOptions);
            const result = await response.text();
            console.log("result------>", result)
            if (response.status == 200) {
                showMessage({
                    message: "Login successfully",
                    type: "success",
                    icon: "success"
                });
                // await AsyncStorage.setItem('token', response.data.token);
                // // await AsyncStorage.setItem('token', "WlhsS01XTXlWbmxZTW14clNXcHZhVTFVVldsTVEwcDNXVmhPZW1ReU9YbGFRMGsyU1d0R2EySlhiSFZKVTFFd1RrUlJlVTVFUlhsT1EwWkJTMmxaYkVscGQybGhSemt4WTI1TmFVOXFVVFJNUTBwcldWaFNiRmd6VW5CaVYxVnBUMmxKZVUxRVNUQk1WRUY2VEZSSmVVbEVSVEZQYWtreVQycFJlRWxwZDJsamJUbHpXbE5KTmtscVNXbE1RMHByV2xoYWNGa3lWbVpoVjFGcFQyMDFNV0pIZURrPQ==");
                // console.log("dffbdmf--->", response.data.token)
                navigation.navigate("Bottomnavigation")
            } else if (response.status == 400) {
                showMessage({
                    message: "Wrong Email\/Mobile..",
                    type: "danger",
                    icon: "danger"
                })
            }

        } catch (error) {
            console.log("error---->", error)
        }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container1}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../assets/logo/jinnlogo.png")} style={styles.logo} resizeMode='contain' />
                        <View>
                            <Text style={[styles.text, { color: "#004E8C" }]}>
                                Jinnuncle is now
                            </Text>
                            <Text style={styles.header}>
                                Jinnuncle
                            </Text>
                            <Text style={styles.header}>Panter</Text>
                            <Text style={styles.text}>Your Home Service Expert</Text>
                            <Text style={[styles.text, { color: "#004E8C" }]}>Quick <Text>.</Text><Text>Affordable<Text>.</Text><Text>Trusted</Text></Text></Text>
                        </View>
                    </View>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            handleLogin(values);
                            // navigation.navigate("Otp")
                            // actions.resetForm(); // Reset form after submission
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={styles.contain}>
                                <TextinputComponent
                                    label={"Email"}
                                    placeholder={"Enter your email."}
                                    inputType={"email"}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    error={touched.email && errors.email}
                                />
                                <Text style={styles.error}>{touched.email && errors.email}</Text>
                                <TextinputComponent
                                    label={"Password"}
                                    placeholder={"Enter your password."}
                                    inputType={"password"}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    error={touched.password && errors.password}
                                />
                                <Text style={styles.error}>{touched.password && errors.password}</Text>

                                <View style={{ marginTop: height * 0.03 }}>
                                    <CustomButton
                                        label={"Verify phone number"}
                                        size={"large"}
                                        onPress={handleSubmit}
                                        backgroundColor={"#004E8C"}
                                        color={"white"}
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>
                    <View><Text style={{ color: "black", fontSize: 18, marginTop: 10 }}> Don't have an Account? <Text style={{ color: "#004E8C" }} onPress={() => navigation.navigate("SignupScreen")}> Signup</Text> </Text></View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    header: {
        fontSize: 35,
        fontWeight: "700",
        color: "black",
        fontFamily: "Roboto-BoldItalic",
        textAlign: "center"

    },
    container1: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: height * 0.2,
        alignItems: "center",
        justifyContent: "center",
        // flexDirection:"row"
    },
    subheading: {
        color: "#000",
        fontSize: 17,
        fontWeight: "400",
        marginTop: 5,
        fontFamily: "Rubik-Regular"
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        // justifyContent: "flex-start",
        fontFamily: "Rubik-Regular",
        width: width * 0.8,
        marginHorizontal: 16
    },
    contain: {
        // backgroundColor: "red",
        borderRadius: 10,
        width: width * 0.9,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.05
    },
    img: {
        width: width,
        height: height
    },
    text: {
        fontSize: 14,
        fontStyle: "normal",
        color: "black",
        fontFamily: "Roboto-MediumItalic"

    },
    logo: {
        height: 150,
        width: 150,
        // tintColor:"#FFF"
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'pink',
        width: '90%',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        borderColor: "gray",
        borderWidth: 1,

    },
    input: {
        flex: 1,
        marginLeft: 10,
        // backgroundColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: "black"
    },

    countryPicker: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        // borderWidth: 1,
        // marginLeft: 20

    },
    // input: {
    //   flex: 1,
    //   // height: 40,
    //   marginLeft: 10,
    //   color:"black",
    //   // backgroundColor: "pink",
    //   width: width * 0.6,
    //   borderWidth: 1,
    //   alignSelf:"center",
    //   backgroundColor:"#FFF"
    // },
});
