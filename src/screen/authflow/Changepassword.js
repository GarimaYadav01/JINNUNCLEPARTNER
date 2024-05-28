import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../compontent/Header'
import TextinputComponent from '../../compontent/TextinputComponent'
import CustomButton from '../../compontent/Custombutton'
import { changepassword } from '../apiconfig/Apiconfig'
import { showMessage } from 'react-native-flash-message'
const { height, width } = Dimensions.get("screen");
const Changepassword = () => {
    const hanleChangepassword = async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("token", "WlhsS01XTXlWbmxZTW14clNXcHZhVTFVVVdsTVEwcDNXVmhPZW1ReU9YbGFRMGsyU1d0R2EySlhiSFZKVTFFd1RrUlJlVTVFUlhsT1EwWkJTMmxaYkVscGQybGhSemt4WTI1TmFVOXFVVFJNUTBwcldWaFNiRmd6VW5CaVYxVnBUMmxKZVUxRVNUQk1WRUV4VEZSRk5FbEVSVE5QYWtFeVQycEpNRWxwZDJsamJUbHpXbE5KTmtscVNXbE1RMHByV2xoYWNGa3lWbVpoVjFGcFQyMDFNV0pIZURrPQ==");
            myHeaders.append("Cookie", "ci_session=7d2d83b6c5009c8461b8ba2da41603db48936d94");
            const formdata = new FormData();
            formdata.append("oldpassword", "123456");
            formdata.append("npassword", "123456");
            formdata.append("cpassword", "123456");
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(changepassword, requestOptions);
            const result = await response.json();
            console.log("result--hanleChangepassword---->", result);
            if (result.status == 200) {
                showMessage({
                    message: "change passowrd succesfully",
                    type: "success",
                    icon: "success"
                });
            } else if (result.status == 400) {
                showMessage({
                    message: "old passowrd not match",
                    type: "danger",
                    icon: "danger"
                })
            }

        } catch (error) {
            console.log("errorerrorerror-->", error)
        }
    }
    return (
        <SafeAreaView>
            <Header title={"Change password"} />
            <View style={{ justifyContent: 'center', alignSelf: "center", marginTop: 20 }}>
                <TextinputComponent label={"Old password"} placeholder={"Enter your password"} />
                <TextinputComponent label={"New password"} placeholder={"Enter your password"} />
                <TextinputComponent label={"Confirmpassword password"} placeholder={"Enter your password"} />
                <View style={{ marginTop: height * 0.03 }}>
                    <CustomButton
                        label={"Verify phone number"}
                        size={"large"}
                        onPress={hanleChangepassword}
                        backgroundColor={"#004E8C"}
                        color={"white"}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Changepassword

const styles = StyleSheet.create({})