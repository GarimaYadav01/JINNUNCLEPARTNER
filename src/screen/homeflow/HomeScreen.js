import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, FlatList, Linking } from "react-native";
import Crad from "../Profileflow/Crad";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import AuthContext from "../authcontext/Authcontext";
import { bookiglist } from "../apiconfig/Apiconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height, width } = Dimensions.get("screen")
const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState("active");
    const { gethandleprofile, isgetprofile } = useContext(AuthContext);
    console.log("isgetprofile---->", isgetprofile)
    const [isBooking, setIsbooking] = useState([]);
    const navigation = useNavigation();
    const [reject, setReject] = useState({});
    console.log("isBooking----->", isBooking)
    // useEffect(() => {
    //     gethandleprofile();

    // }, [])
    useEffect(() => {
        const handleFocus = () => {
            gethandleprofile();
            gethandlebooking("1");
        };
        handleFocus();
        const unsubscribeFocus = navigation.addListener('focus', handleFocus);
        return unsubscribeFocus;
    }, []);

    const gethandlebooking = async (id) => {
        try {
            const token = await AsyncStorage.getItem("token")
            const myHeaders = new Headers();
            myHeaders.append("token", token);
            myHeaders.append("Cookie", "ci_session=f9ab7c2e65bd3eee28e0e13590a480a2d83c63ba");
            const formdata = new FormData();
            formdata.append("techsion_status", id);
            console.log("id-->", id)
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(bookiglist, requestOptions);
            const result = await response.json();
            console.log("result----response>", result);
            if (result.status == 200) {
                setIsbooking(result.data);
                console.log("result.data---->", result.data)
                // const user_id = result.data.user_id;
                await AsyncStorage.setItem("userData", result.data[0]?.user_id);
                console.log("userData-->", result.data.user_id)

            }
        } catch (error) {
            console.log("error----response>", error);
        }
    }

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

    const handlePhonePress = (mobile) => {
        Linking.openURL(`tel:${mobile}`);
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
        <View style={styles.boxcontainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("CallDetails", { orderid: item.order_id })}>
                    <View style={{ flexDirection: "row", columnGap: 10 }}>
                        <Image source={require("../../assets/bottomnavigatiomnimage/user4.png")} style={{ width: 25, height: 25 }} />
                        <View>
                            <Text style={styles.text1}>{item.f_name}</Text>
                            <Text style={styles.text1}>{item.address}</Text>
                            <Text style={styles.texttt}>{item.city} <Text>{item.pincode}</Text></Text>
                            <Text style={styles.texttt}>{item.state}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => toggleVectorselect(item.id)}>
                    <Text style={styles.text2}>{reject[item.id] ? 'Reject' : 'Active'}</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ marginHorizontal: 24, fontSize: 15, color: "gray", marginTop: 10 }}>{item.phone}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
                <Text style={{ marginHorizontal: 20, fontSize: 15, color: "gray", marginTop: 10 }}>{item.item}</Text>
                <View style={{ flexDirection: "row", columnGap: 10 }}>
                    <TouchableOpacity onPress={handleWhatsappPress}>
                        <Image source={require("../../assets/Newicon/whatsapp.png")} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePhonePress(item.mobile)}>
                        <Image source={require("../../assets/Newicon/telephoneactive.png")} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    data = [
        {
            id: "1",
            name: "Active"
        },
        {
            id: "2",
            name: "New Call"
        },
        {
            id: "3",
            name: "Pending",
        },
        {
            id: "4",
            name: "Completed"
        },
    ]

    const renderTab = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.btntab, { backgroundColor: activeTab === item.name ? '#004E8C' : 'white' }]}
                onPress={() => {
                    setActiveTab(item.name);
                    gethandlebooking(item.id);
                }}
            >
                <Text style={[styles.name, { color: activeTab === item.name ? 'white' : 'black' }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, alignItems: "center", marginTop: 10, }}>
                    <View style={{ flexDirection: "row", columnGap: 15, marginTop: 10, }}>
                        <Image source={require("../../assets/Newicon/images.png")}
                            style={{ height: 50, width: 50, borderRadius: 50 }}
                        />
                        <Text style={styles.text}>{isgetprofile.first_name}</Text>
                    </View>
                    <View>
                        <Image source={require("../../assets/logo/jinnlogo.png")} style={{ width: 40, height: 40 }} />
                    </View>
                </View>
                <View style={{ marginTop: height * 0.03 }}>
                    <FlatList
                        data={data}
                        renderItem={renderTab}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ marginTop: height * 0.03, marginHorizontal: 20 }}>
                    <FlatList
                        data={isBooking}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id} />
                </View>
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

    },
    btntab: {
        borderWidth: 1,
        backgroundColor: "white",
        width: width * 0.4,
        height: height * 0.05,
        borderColor: "white",
        // columnGap:10,
        marginHorizontal: 10,
        textAlign: "center",
        borderRadius: 50,
        justifyContent: "center",
        marginTop: height * 0.03
    },
    name: {
        color: "black",
        textAlign: "center",
        fontSize: 15,
        alignItems: "center",
        // flex:1
    },
    boxcontainer: {
        paddingVertical: height * 0.01,
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
        justifyContent: "center",
        height: height * 0.04
    },
    text2: {
        color: "white",
        textAlign: "center"
    },
    text1: {
        color: "black",
        fontSize: 18,
        fontWeight: "500"
    },
    texttt: {
        fontSize: 15,
        color: "gray",
        fontWeight: "400"


    }

});

export default HomeScreen;
