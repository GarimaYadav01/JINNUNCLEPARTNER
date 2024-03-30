import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../compontent/Header'
import { useNavigation } from '@react-navigation/native';
const Add = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: "1",
            title: "Product Category",
            subtitle: "Air Conditioner"
        },
        {
            id: "2",
            title: "Product Sub-category",
            subtitle: "2465778930"
        },
        {
            id: "3",
            title: "Model No",
            subtitle: "Installation required"
        },
        {
            id: "4",
            title: "Capacity",
            subtitle: "27/03/2024"
        },
        {
            id: "5",
            title: "Unit Location",
            subtitle: "28/03/2024"
        },

    ];
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header title={"Add product"} showButton={true} buttonTitle={"Send"} />
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={styles.item2}>
                    <View>
                        <Text style={styles.title}>IDU Serial Number</Text>
                        <Text style={styles.subtitle}>--</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("QRScreen")}>
                        <Image source={require("../../assets/Newicon/scanner.png")} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.item2}>
                    <View>
                        <Text style={styles.title}>ODU Serial Number</Text>
                        <Text style={styles.subtitle}>--</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("QRScreen")}>
                        <Image source={require("../../assets/Newicon/scanner.png")} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Add;
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
    item: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "black"
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
    item2: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
