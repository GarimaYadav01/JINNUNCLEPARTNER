import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import Crad from "../Profileflow/Crad";
const { height, width } = Dimensions.get("screen")
const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState("active");
    const renderTabContent = () => {
        switch (activeTab) {
            case "active":
                return (
                    <View style={styles.tabContent}>
                        <Crad />
                    </View>
                );
            case "inactive":
                return (
                    <View style={styles.tabContent}>
                        <Text>Inactive Work</Text>
                    </View>
                );
            case "newCall":
                return (
                    <View style={styles.tabContent}>
                        <Text>New Call</Text>
                    </View>
                );
            case "pending":
                return (
                    <View style={styles.tabContent}>
                        <Text>Pending</Text>
                    </View>
                );
            case "completed":
                return (
                    <View style={styles.tabContent}>
                        <Text>Completed</Text>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, alignItems: "center", marginTop: 10, }}>
                    <View style={{ flexDirection: "row", columnGap: 15, marginTop: 10, }}>
                        <Image source={require("../../assets/Newicon/images.png")}
                            style={{ height: 50, width: 50, borderRadius: 50 }}
                        />
                        <Text style={styles.text}>Garima yadav</Text>
                    </View>
                    <View>
                        <Image source={require("../../assets/logo/jinnlogo.png")} style={{ width: 40, height: 40 }} />
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.tabs}>
                        <TouchableOpacity onPress={() => setActiveTab("active")} style={[styles.tab, activeTab === "active" && styles.activeTab]}>
                            <Text style={styles.tabText}>Active</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => setActiveTab("inactive")} style={[styles.tab, activeTab === "inactive" && styles.activeTab]}>
                            <Text style={styles.tabText}>Inactive</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => setActiveTab("newCall")} style={[styles.tab, activeTab === "newCall" && styles.activeTab]}>
                            <Text style={styles.tabText}>New Call</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveTab("pending")} style={[styles.tab, activeTab === "pending" && styles.activeTab]}>
                            <Text style={styles.tabText}>Pending</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveTab("completed")} style={[styles.tab, activeTab === "completed" && styles.activeTab]}>
                            <Text style={styles.tabText}>Completed</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {renderTabContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

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
        marginTop: height * 0.03
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    tabText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: "#007bff",
    },
    tabContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03
    },
    text: {
        fontSize: 25,
        fontStyle: "normal",
        color: "black",

    }
});

export default HomeScreen;
