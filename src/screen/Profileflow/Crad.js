import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");

const Card = () => {
    const navigation = useNavigation();
    const [reject, setReject] = useState({});
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
            phone: '6393540613',
            item: 'Air Conditioner - Split',
        },
        {
            id: '3',
            address: 'janakpuri, kriti tower',
            status: 'active',
            phone: '8809339030',
            item: 'Air Conditioner - Split',
        },
    ];

    const handleWhatsappPress = () => {
        const phoneNumber = "1234567890";
        const message = "Hello from my app!";
        const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        Linking.canOpenURL(whatsappUrl)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(whatsappUrl);
                } else {
                    console.error("WhatsApp is not installed on this device");
                }
            })
            .catch((err) => console.error("An error occurred", err));
    };

    const handlePhonePress = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    useEffect(() => {
        // Initialize quantity states for each item
        const initialRejectStates = {};
        data.forEach(({ id }) => {
            initialRejectStates[id] = false;
        });
        setReject(initialRejectStates);
    }, []);

    const toggleVectorselect = (id) => {
        setReject(prevStates => ({
            ...prevStates,
            [id]: !prevStates[id]
        }));
    };

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("CallDetails")}>
                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                        <Image source={require("../../assets/bottomnavigatiomnimage/user4.png")} style={{ width: 25, height: 25 }} />
                        <Text style={styles.text1}>{item.address}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => toggleVectorselect(item.id)}>
                    <Text style={styles.text}>{reject[item.id] ? 'Reject' : 'Active'}</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ marginHorizontal: 24, fontSize: 15, color: "gray", marginTop: 10 }}>{item.phone}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
                <Text style={{ marginHorizontal: 20, fontSize: 15, color: "gray", marginTop: 10 }}>{item.item}</Text>
                <View style={{ flexDirection: "row", columnGap: 10 }}>
                    <TouchableOpacity onPress={handleWhatsappPress}>
                        <Image source={require("../../assets/Newicon/whatsapp.png")} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePhonePress(item.phone)}>
                        <Image source={require("../../assets/Newicon/telephoneactive.png")} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        paddingVertical: height * 0.04,
        width: width * 0.9,
        backgroundColor: "#FFF",
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
});
