import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions, Image } from 'react-native';
import Header from '../../compontent/Header';
import CustomButton from '../../compontent/Custombutton';
const { height, width } = Dimensions.get("screen")


const WithdrawScreen = () => {
    const [amount, setAmount] = useState('');

    const handleWithdraw = () => {
        // Perform validation on the amount
        if (!amount.trim()) {
            Alert.alert('Error', 'Please enter the amount to withdraw');
            return;
        }

        // Perform withdrawal operation
        // Here you can implement the logic to handle the withdrawal, such as API calls

        // For demonstration, let's just show an alert with the withdrawal amount
        Alert.alert('Withdrawal', `Withdrawal request for $${amount} submitted successfully`);

        // Clear the input field after withdrawal
        setAmount('');
    };

    const [selectedBank, setSelectedBank] = useState(null);

    const handleBankSelection = (bankName) => {
        if (selectedBank === bankName) {
            // If the same bank is already selected, deselect it
            setSelectedBank(null);
        } else {
            // Otherwise, select the clicked bank
            setSelectedBank(bankName);
        }
    };

    return (
        <View style={styles.container}>
            {/* <Header title="Withdraw" /> */}
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount to withdraw"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
                {/* <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
                    <Text style={styles.buttonText}>Withdraw</Text>
                </TouchableOpacity> */}
                <CustomButton size={"large"} backgroundColor={"#004E8C"} color={"white"} label={"withdraw"} onPress={handleWithdraw} />



            </View>
            <View style={{ marginHorizontal: 20, borderTopWidth: 1, borderTopColor: "gray", marginTop: 10 }}>
                <Text style={styles.heading}>Withdraw To</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10, }}>
                <TouchableOpacity onPress={() => handleBankSelection("ICIC bank")} style={styles.con}>
                    <View style={[styles.bankItem, selectedBank === "ICIC bank" && styles.selectedBankItem]}>
                        <Image source={require("../../assets/Newicon/bank-building.png")} style={{ width: 20, height: 20 }} />
                        <Text style={styles.bankName}>ICIC bank</Text>
                        {selectedBank === "ICIC bank" && <Image source={require("../../assets/Newicon/tick.png")} style={styles.tickIcon} />}

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleBankSelection("other bank")} style={styles.con}>
                    <View style={[styles.bankItem, selectedBank === "other bank" && styles.selectedBankItem]}>
                        <Image source={require("../../assets/Newicon/bank-building.png")} style={{ width: 20, height: 20 }} />
                        <Text style={styles.bankName}>other bank</Text>
                        {selectedBank === "other bank" && <Image source={require("../../assets/Newicon/tick.png")} style={styles.tickIcon} />}

                    </View>
                </TouchableOpacity>
            </View>

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
    con: {
        borderWidth: 1,
        width: width * 0.9,
        flexDirection: "row",
        backgroundColor: "#f0f8ff",
        borderColor: "#f0f8ff",
        padding: 15,
        columnGap: 10,
        borderRadius: 10,
        marginVertical: height * 0.01
    },
    tickIcon: {
        height: 20,
        width: 20,
        marginLeft: width * 0.48
    },
    bankItem: {
        flexDirection: "row",
        columnGap: 10,
        alignContent: "center"

    }
});

export default WithdrawScreen;
