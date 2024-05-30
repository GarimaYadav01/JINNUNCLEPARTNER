import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../compontent/Header'
import { historyapi } from '../apiconfig/Apiconfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { height } = Dimensions.get("screen")

const History = () => {

    const [ishistory, setIshistory] = useState([]);
    console.log("ishistory---->", ishistory)
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

    const gethistory = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            const myHeaders = new Headers();
            myHeaders.append("token", token);
            console.log("token---->", token)
            myHeaders.append("Cookie", "ci_session=f9ab7c2e65bd3eee28e0e13590a480a2d83c63ba");
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(historyapi, requestOptions);
            const result = await response.json();
            console.log("esult---->esult---->", result)
            if (result.status == 200) {
                setIshistory(result.data)
            }
            console.log("result--historyapi-->", result.data)
        } catch (error) {
            console.log("error-historyapi>", error)
        }
    }

    useEffect(() => {
        gethistory();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                    <Image source={require("../../assets/Newicon/clock.png")} style={{ width: 35, height: 35 }} />
                    <View>
                        <Text style={styles.text}>{item.type}</Text>
                        <Text style={[styles.text, { color: "gray" }]}>{item.message}</Text>
                    </View>

                </View>
                <View>
                    <Text style={styles.price}> ₹ {item.amount}</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <Text style={{ color: "gray", fontSize: 14 }}>{item.date_time}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header title={"History"} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={ishistory}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListContainer}>
                            <Image source={require("../../assets/Icon/deletecopy.png")} style={{ width: 70, height: 70 }} />
                            <Text style={styles.emptyListText}>No data found</Text>
                        </View>
                    )}
                />
            </View>
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
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    emptyListText: {
        fontSize: 20,
        color: 'gray',
        fontWeight: "bold"
    },
});
