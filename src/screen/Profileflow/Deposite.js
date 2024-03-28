import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import CustomButton from '../../compontent/Custombutton';
const { height, width } = Dimensions.get("screen")


const Deposite = () => {
    const [amount, setAmount] = useState('');

    const handleDeposit = () => {
        // Perform validation on the amount
        if (!amount.trim()) {
            Alert.alert('Error', 'Please enter the amount to deposit');
            return;
        }

        // Display an alert with the entered amount
        Alert.alert('Deposit Successful', `Deposit of $${amount} completed successfully`);

        // Clear the input field after deposit
        setAmount('');
    };



    const data = [
        {
            date: " april 7 2024,",
            status: "pending",
            amount: "₹100",
            balance: "₹100",
        },
        {
            date: " april 7 2024,",
            status: "pending",
            amount: "₹100",
            balance: "₹100",
        },
        {
            date: " april 7 2024,",
            status: "pending",
            amount: "₹100",
            balance: "₹100",
        },
        {
            date: " april 7 2024,",
            status: "pending",
            amount: "₹100",
            balance: "₹100",
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text>{item.date}</Text>
            <TouchableOpacity style={styles.btn}>
                <Text>{item.status}</Text>
            </TouchableOpacity>

            <Text> {item.amount}</Text>
            <Text> {item.balance}</Text>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount to deposit"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
                {/* <TouchableOpacity style={styles.button} onPress={handleDeposit}>
                    <Text style={styles.buttonText}>Deposit</Text>
                </TouchableOpacity> */}
                <CustomButton size={"large"} backgroundColor={"#004E8C"} color={"white"} label={"Deposit"} onPress={handleDeposit} />


            </View>
            <View style={{ marginHorizontal: 20, borderTopWidth: 1, borderTopColor: "gray", marginTop: 10 }}>
                <Text style={styles.heading}>Deposit Transaction</Text>
            </View>
            {/* <ScrollView horizontal style={{ flexDirection: "row", }}> */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", columnGap: 20, marginTop: height * 0.03, borderBottomColor: "gray", borderBottomWidth: 1 }}>
                <Text style={styles.text}>Date</Text>
                <Text style={styles.text}>Status</Text>
                <Text style={styles.text}>Amount</Text>
                <Text style={styles.text}>Balance</Text>
            </View>
            {/* </ScrollView> */}

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()} // Use index as key, assuming data items are unique
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: height * 0.03
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    heading: {
        fontSize: 22,
        color: "#000",
        fontWeight: "bold",
        fontFamily: "Roboto-BoldItalic",
        marginTop: 10
    },
    text: {
        fontSize: 17,
        color: "black",
        fontWeight: "bold",
        marginLeft: 20
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        columnGap: 20,
        marginTop: height * 0.04,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginHorizontal: 10

    }
});

export default Deposite;
