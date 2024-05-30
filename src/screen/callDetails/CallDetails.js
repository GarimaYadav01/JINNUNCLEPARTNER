import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../compontent/Header';
import Call from './Call';
import Product from './Product';
import Customer from './Customer';
import { bookingdetails } from '../apiconfig/Apiconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get("screen")
const CallDetails = ({ route }) => {
    const orderid = route?.params?.orderid
    const navigation = useNavigation();
    console.log("orderid---->", orderid)
    const [activeTab, setActiveTab] = useState("active");
    const [isbookingdetails, setIsbookingdetails] = useState([])
    console.log("isbookingdetails---------->", isbookingdetails)

    useEffect(() => {
        const handleFocus = () => {
            getbookingdetails();
        };
        handleFocus();
        const unsubscribeFocus = navigation.addListener('focus', handleFocus);
        return unsubscribeFocus;
    }, []);


    const getbookingdetails = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            const myHeaders = new Headers();
            myHeaders.append("token", token);
            myHeaders.append("Cookie", "ci_session=f9ab7c2e65bd3eee28e0e13590a480a2d83c63ba");
            const formdata = new FormData();
            formdata.append("order_id", orderid);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(bookingdetails, requestOptions);
            const result = await response.json();
            console.log("result----response>", result);
            if (result.status == 200) {
                setIsbookingdetails(result)
            }
        } catch (error) {
            console.log("error----response>", error)
        }
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "active":
                return (
                    <View style={styles.tabContent}>
                        <Call bookingDetails={isbookingdetails} />
                    </View>
                );
            case "newCall":
                return (
                    <View style={styles.tabContent}>
                        <Product bookingDetails={isbookingdetails} />
                    </View>
                );
            case "pending":
                return (
                    <View style={styles.tabContent}>
                        {/* <Text>Pending</Text> */}
                        <Customer bookingDetails={isbookingdetails} />
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header title={"3778384499"} showButton={true} buttonTitle="Start Work" />
            <ScrollView style={{ flexGrow: 1, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => setActiveTab("active")} style={[styles.tab, activeTab === "active" && styles.activeTab]}>
                        <Text style={styles.tabText}>Call Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveTab("newCall")} style={[styles.tab, activeTab === "newCall" && styles.activeTab]}>
                        <Text style={styles.tabText}>Product</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveTab("pending")} style={[styles.tab, activeTab === "pending" && styles.activeTab]}>
                        <Text style={styles.tabText}>Customer</Text>
                    </TouchableOpacity>
                </View>
                {renderTabContent()}
            </ScrollView>
            {/* 
            <FlatList
                data={data}
                renderItem={ }
            /> */}
        </SafeAreaView>
    )
}

export default CallDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#FFF",
    },
    tabs: {
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginTop: height * 0.03,

    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 35,
    },
    tabText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#333",
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: "#007bff",
    },
    tabContent: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: height * 0.03
    },
    text: {
        fontSize: 25,
        fontStyle: "normal",
        color: "black",
    }
});


