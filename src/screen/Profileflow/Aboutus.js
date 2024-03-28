import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from "../../compontent/Header";


const AboutUs = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"About Us"} />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Welcome to Jinn Uncle Partner</Text>
                    <Text style={styles.sectionText}>
                        Welcome to Jinn Uncle Partner, where we connect millions of buyers and sellers around the world, empowering people and creating economic opportunities for all.
                    </Text>

                    <Text style={styles.sectionText}>
                        Within our markets, millions of people around the world connect, both online and offline, to make, sell, and buy unique goods. We also offer a wide range of seller services and tools that help creative entrepreneurs start, manage, and scale their businesses. Our mission is to reimagine commerce in ways that build a more fulfilling and lasting world, and we’re committed to using the power of business to strengthen communities and empower people.
                    </Text>

                    {/* Add more sections as needed */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    content: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black",
    },
    sectionText: {
        fontSize: 16,
        marginBottom: 20,
        color: "gray",
    },
});

export default AboutUs;
