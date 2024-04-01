import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../compontent/Header'
const { height } = Dimensions.get("screen")

const History = () => {
    const data = [
        {
            name: "garima yadav",
            timing: "paid yesterday 11:29 AM",
            image: require("../../assets/Newicon/clock.png"),
            prince: "-₹100"
        },
        {
            name: "shikha",
            timing: "paid yesterday 11:29 AM",
            image: require("../../assets/Newicon/clock.png"),
            prince: "-₹300"
        },
        {
            name: "kriti",
            timing: "paid yesterday 11:29 AM",
            image: require("../../assets/Newicon/clock.png"),
            prince: "+₹100"
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                    <Image source={item.image} style={{ width: 35, height: 35 }} />
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.price}>{item.prince}</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <Text style={{ color: "gray", fontSize: 14 }}>{item.timing}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header title={"History"} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
        </SafeAreaView>
    );
}

export default History;

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: height * 0.02
    },
    text: {
        color: "black",
        fontSize: 19,
        fontWeight: "400"
    },
    price: {
        color: "gray",
        fontSize: 19,
        fontWeight: "400"
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        paddingBottom: 10
    }
});
