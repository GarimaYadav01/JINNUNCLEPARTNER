import React, { useEffect, useState } from "react";
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../compontent/Header";
import TextinputComponent from "../../compontent/TextinputComponent";
import CustomButton from "../../compontent/Custombutton";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
const { height, width } = Dimensions.get("screen")
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Signup, techniciantyp } from "../apiconfig/Apiconfig";
import { showMessage } from "react-native-flash-message";
import ImagePicker from 'react-native-image-crop-picker';
const SignupScreen = () => {
    const [istechni, setIstechni] = useState([]);
    console.log("dhshdhddhd-->", istechni)
    const [isLoading, setIsLoading] = useState(false);
    const [profileImage, setProfileImage] = useState(require('../../assets/bottomnavigatiomnimage/user5.png'));
    const openImagePicker = () => {
        Alert.alert(
            'Select Image Source',
            'Choose an option to select an image',
            [
                {
                    text: 'Camera',
                    onPress: () => openImageSource('camera'),
                },
                {
                    text: 'Gallery',
                    onPress: () => openImageSource('gallery'),
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };

    const openImageSource = (source) => {
        const options = {
            width: 300,
            height: 400,
            cropping: true,
        };

        if (source === 'camera') {
            ImagePicker.openCamera(options)
                .then((image) => {
                    if (image.path) {
                        setProfileImage({ uri: image.path });
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        } else if (source === 'gallery') {
            ImagePicker.openPicker(options)
                .then((image) => {
                    if (image.path) {
                        setProfileImage({ uri: image.path });
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    };


    const handleSubmitregistor = async (values) => {
        try {
            const formdata = new FormData();
            formdata.append("name", values.technicianName);
            formdata.append("email", values.email);
            formdata.append("mobile", values.phoneNumber);
            formdata.append("dealer_name", values.dealerName);
            formdata.append("technician_type", values.technicianType);
            formdata.append("password", values.password);
            formdata.append("cpassword", values.password);
            // formdata.append("device_id", "522623623623");
            const requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(Signup, requestOptions);
            const result = await response.json();
            console.log("result--wwwww---->", result);
            if (result.status == 200) {
                showMessage({
                    message: "Signup successful",
                    icon: "success",
                    type: "success"
                });
            } else if (result.status == 400) {
                showMessage({
                    message: "This Email is already in use",
                    type: "danger",
                    icon: "danger",
                });
            }
        } catch (error) {
            console.log("resultresult------>", error);
        }
    };


    const navigation = useNavigation();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        technicianName: Yup.string()
            .required('Technician name is required'),
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(10, 'Must be at least 10 characters')
            .max(15, 'Must not exceed 15 characters'),
        dealerName: Yup.string()
            .required('Dealer name is required'),
        technicianType: Yup.string()
            .required('Technician type is required'),
    });

    const gethandletrafer = async () => {
        try {
            setIsLoading(false);
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            const response = await fetch(techniciantyp, requestOptions);
            const result = await response.json();
            if (result.status == 200) {
                console.log("result---->", result)
                setIstechni(result.data)
                setIsLoading(false);
                console.log("result.data-------->", result.data)

            }
        } catch (error) {
            console.log("error----->", error)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        gethandletrafer();
    }, [])

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
                <TouchableOpacity onPress={openImagePicker}>
                    <Image source={require("../../assets/bottomnavigatiomnimage/user5.png")} resizeMode="comtain" style={{ width: 150, height: 150 }} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flexGrow: 1, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <Formik
                    initialValues={{ email: '', password: '', technicianName: '', phoneNumber: '', dealerName: '', technicianType: null, }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        // Check if technicianType is selected
                        if (!values.technicianType) {
                            showMessage({
                                message: "Please select a technician type",
                                type: "danger",
                                icon: "danger",
                            });
                            return; // Prevent form submission if dropdown value is null
                        }
                        handleSubmitregistor(values);
                        console.log("values--->", values)
                        // actions.resetForm(); // Reset form after submission
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                        <View style={{ marginHorizontal: 16, justifyContent: "center", marginVertical: 10 }}>
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
                            <TextinputComponent label={"Password"}
                                placeholder={"Enter your password."}
                                inputType={"password"}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                error={touched.password && errors.password} />
                            <Text style={styles.error}>{touched.password && errors.password}</Text>
                            <TextinputComponent
                                label={"Technician Name"}
                                placeholder={"Enter your name."}
                                inputType={"person"}
                                onChangeText={handleChange('technicianName')}
                                onBlur={handleBlur('technicianName')}
                                value={values.technicianName}
                                error={touched.technicianName && errors.technicianName} />
                            <Text style={styles.error}>{touched.technicianName && errors.technicianName}</Text>
                            <TextinputComponent
                                label={"Phone number"}
                                placeholder={"Enter your phone number."}
                                inputType={"phone"}
                                onChangeText={handleChange('phoneNumber')}
                                onBlur={handleBlur('phoneNumber')}
                                value={values.phoneNumber}
                                error={touched.phoneNumber && errors.phoneNumber} />
                            <Text style={styles.error}>{touched.phoneNumber && errors.phoneNumber}</Text>
                            <TextinputComponent
                                label={"Dealer Name"}
                                placeholder={"Enter your Dealer Name."}
                                inputType={"person"}
                                onChangeText={handleChange('dealerName')}
                                onBlur={handleBlur('dealerName')}
                                value={values.dealerName}
                                error={touched.dealerName && errors.dealerName} />
                            <Text style={styles.error}>{touched.dealerName && errors.dealerName}</Text>
                            <Text style={styles.textInputLabel}>Technician Type</Text>
                            <View style={styles.container}>
                                <Dropdown
                                    style={[styles.dropdown,]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={istechni}
                                    search
                                    maxHeight={300}
                                    labelField="name"
                                    valueField="id"
                                    placeholder={!isFocus ? 'Select item' : '...'}
                                    searchPlaceholder="Search..."
                                    value={value}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setFieldValue('technicianType', item.id);
                                    }}
                                />
                            </View>
                            <Text style={styles.error}>{touched.technicianType && errors.technicianType}</Text>
                            <CustomButton size={"large"} backgroundColor={"#004E8C"} color={"white"} label={"Continue"} onPress={handleSubmit} />
                        </View>
                    )}
                </Formik>

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
        color: "black"
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
    error: {
        color: "red"
    }
});
