import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../compontent/Header';
import TextinputComponent from '../../compontent/TextinputComponent';
import CustomButton from '../../compontent/Custombutton';

const { height, width } = Dimensions.get("screen");
const Change = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                    <TextinputComponent label={"Product Category"} placeholder={"Enter your Product category"} />
                    <TextinputComponent label={"Product Sub-category"} placeholder={"Enter your Product Sub-category"} />
                    <TextinputComponent label={"Model No"} placeholder={"Enter your  Model No"} />
                    <TextinputComponent label={"Capcaity"} placeholder={"Enter your Capacity"} />
                    <TextinputComponent label={"Unit Location"} placeholder={"Enter your Unit Location"} />
                    <View style={{ marginTop: height * 0.02 }}>
                        <CustomButton size={"large"} color={"white"} backgroundColor={"#004E8C"} label={"Save"} />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Change;

const styles = StyleSheet.create({})