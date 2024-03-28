import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("screen")

const Crad = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: '1',
            address: 'janakpuri, kriti tower',
            status: 'active',
            phone: '732636484909',
            item: 'Air Conditioner - Split',
        },
        {
            id: '2',
            address: 'janakpuri, kriti tower',
            status: 'active',
            phone: '732636484909',
            item: 'Air Conditioner - Split',
        },
        {
            id: '3',
            address: 'janakpuri, kriti tower',
            status: 'active',
            phone: '732636484909',
            item: 'Air Conditioner - Split',
        },

    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("CallDetails")}>
            <View style={styles.continer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                        <Image source={require("../../assets/bottomnavigatiomnimage/user4.png")} style={{ width: 25, height: 25 }} />
                        <Text style={styles.text1}>{item.address}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.text}>{item.status}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginHorizontal: 24, fontSize: 15, color: "gray", marginTop: 10 }}>{item.phone}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
                    <Text style={{ marginHorizontal: 20, fontSize: 15, color: "gray", marginTop: 10 }}>{item.item}</Text>
                    <Image source={require("../../assets/Newicon/telephoneactive.png")} style={{ height: 20, width: 20 }} />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

export default Crad;

const styles = StyleSheet.create({
    continer: {
        // borderWidth: 1,
        paddingVertical: height * 0.04,
        width: width * 0.9,
        backgroundColor: "#FFF",
        // borderColor: "#FFF",
        borderRadius: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: "#004E8C",
        marginTop: 10
    },
    btn: {
        width: width * 0.2,
        borderRadius: 30,
        backgroundColor: "#004E8C",
        justifyContent: "center"
    },
    text: {
        color: "white",
        textAlign: "center"
    },
    text1: {
        color: "black",
        fontSize: 18,
        fontWeight: "500"
    }
})