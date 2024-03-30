import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Header from '../../compontent/Header';
import Call from './Call';
import Product from './Product';
import Customer from './Customer';
const { height, width } = Dimensions.get("screen")

const CallDetails = () => {
    const [activeTab, setActiveTab] = useState("active");
    const renderTabContent = () => {
        switch (activeTab) {
            case "active":
                return (
                    <View style={styles.tabContent}>
                        <Call />
                    </View>
                );
            case "newCall":
                return (
                    <View style={styles.tabContent}>
                        <Product />
                    </View>
                );
            case "pending":
                return (
                    <View style={styles.tabContent}>
                        {/* <Text>Pending</Text> */}
                        <Customer />
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


