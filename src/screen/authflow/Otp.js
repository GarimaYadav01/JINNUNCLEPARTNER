import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Dimensions, TextInput, TouchableOpacity, Platform, ScrollView, ImageBackground, Alert } from 'react-native';
import TextinputComponent from '../../compontent/TextinputComponent';
import CustomButton from '../../compontent/Custombutton';
import CodeInput from 'react-native-code-input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Otpapi } from '../apiconfig/Apiconfig';
import { showMessage } from 'react-native-flash-message';
const { width, height } = Dimensions.get("screen")

const Otp = (props) => {
    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCodeEntered, setIsCodeEntered] = useState(false);
    const navigation = useNavigation();
    const phoneNumber = props.route.params.phoneNumber
    const email = props.route.params.email
    console.log("phoneNumber-->", phoneNumber)
    console.log("email--->", email)
    const onCodeFilled = (code) => {
        setCode(code);
        setIsCodeEntered(true);
    };
    const handleVerfiotp = async () => {
        try {
            const formdata = new FormData();
            // formdata.append("email", email);
            formdata.append("email", "shasssssh@gmail.com");
            // formdata.append("otp", code);
            formdata.append("otp1", "1");
            formdata.append("otp2", "2");
            formdata.append("otp3", "3");
            formdata.append("otp4", "4");
            console.log("email-->", email)
            console.log("code-->", code)

            const requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(Otpapi, requestOptions);
            console.log("response---->", response)
            const result = await response.json();
            console.log("result---->", result)

            if (result.status == 200) {
                showMessage({
                    message: "Otp verified successfully",
                    type: "success",
                    icon: "success"
                });
                navigation.navigate("LoginScreen"); // Assuming you want to navigate to a different screen on success
            } else {
                showMessage({
                    message: "Otp verification failed",
                    type: "danger",
                    icon: "danger"
                });
            }
        } catch (error) {
            console.log("error---->", error);
        }
    };


    // const handleResendOTP = async () => {
    //     try {
    //         const formdata = new FormData();
    //         formdata.append("mobile", phoneNumber);
    //         const requestOptions = {
    //             method: "POST",
    //             body: formdata,
    //             redirect: "follow"
    //         };
    //         const response = await fetch(Resendotp, requestOptions);
    //         const result = await response.text();
    //         console.log(result);
    //         if (result.status == 200) {
    //             console.log(jhdkfjkdlkdl)
    //             showMessage({
    //                 message: result?.message,
    //                 type: "success",
    //                 icon: "success"
    //             })
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };




    const [timer, setTimer] = useState(180);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isResendVisible, setIsResendVisible] = useState(true);
    const startTimer = () => {
        setIsTimerRunning(true);
        // handleResendOTP();
        setIsResendVisible(false);
        setTimer(180);
    };

    const stopTimer = () => {
        setIsTimerRunning(false);
        setIsResendVisible(true);
    };

    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 0) {
                        stopTimer();
                        return 0;
                    } else {
                        return prevTimer - 1;
                    }
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"transparent"} translucent />
            <ScrollView>
                <View style={styles.container1}>
                    <Text style={styles.header}>Otp Verification</Text>
                    <Text style={styles.subheading}>
                        Enter your  one time password  {phoneNumber}
                    </Text>
                    <CodeInput
                        activeColor="#004E8C"
                        inactiveColor="#000"
                        autoFocus={true}
                        inputPosition="center"
                        size={60}
                        codeLength={4}
                        onFulfill={(code) => onCodeFilled(code)}
                        containerStyle={styles.codeInputContainer}
                        codeInputStyle={styles.codeInput}
                    />
                </View>
                <View style={{ justifyContent: "flex-end", alignSelf: "center", marginLeft: width * 0.7, marginVertical: height * 0.04 }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", }}>
                        {isResendVisible && (
                            <TouchableOpacity onPress={startTimer}>
                                <Text style={styles.resend}>Resend</Text>
                            </TouchableOpacity>
                        )}
                        {isTimerRunning && <Text style={styles.timer}>{formatTime(timer)}</Text>}
                    </View>
                </View>
                <CustomButton
                    size={"large"}
                    label={"Continue"}
                    // onPress={() => navigation.navigate("Bottomnavigation")}
                    onPress={handleVerfiotp}
                    backgroundColor={isCodeEntered ? "#004E8C" : "white"}
                    color={isCodeEntered ? "white" : "#004E8C"}
                    disabled={!isCodeEntered}
                />
            </ScrollView>

            {isLoading && <LoaderScreen isLoading={isLoading} />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        // backgroundColor: "#000"
    },
    header: {
        fontSize: 40,
        // fontWeight: "500",
        color: "#000",
        fontFamily: "Roboto-BoldItalic"
    },
    container1: {
        // flex: 1,
        marginHorizontal: 20,
        marginTop: height * 0.07,
        // backgroundColor:"red"
    },
    logo: {
        width: width * 0.8,
        height: height * 0.08
    },
    subheading: {
        color: "#000",
        fontSize: 16,
        // fontWeight: "500",
        marginTop: 5,
        fontFamily: "Roboto-BoldItalic"
    },

    error: {
        color: 'red',
        fontSize: 14,
        marginTop: -5,
    },
    codeInputContainer: {
        marginTop: height * 0.06,
        columnGap: 15
    },
    codeInput: {
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        // color: "white"
    },
    resend: {
        fontFamily: "Roboto-BoldItalic",
        fontSize: 18,
        color: "#004E8C"
    },
    timer: {
        fontSize: 14,
        fontStyle: "normal",
        color: "#004E8C"
    },
    img: {
        height: height,
        width: width
    }
});
export default Otp;
