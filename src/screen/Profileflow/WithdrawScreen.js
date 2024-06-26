import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions, Image } from 'react-native';
import Header from '../../compontent/Header';
import CustomButton from '../../compontent/Custombutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { withdrawapi } from '../apiconfig/Apiconfig';
import AuthContext from '../authcontext/Authcontext';
import { showMessage } from 'react-native-flash-message';
const { height, width } = Dimensions.get("screen")
const WithdrawScreen = () => {
    const [amount, setAmount] = useState('');
    const { isgetprofile } = useContext(AuthContext);
    console.log("isgetprofileisgetprofile---->", isgetprofile)
    const handleWithdraw = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            const userid = await AsyncStorage.getItem("userData")
            const myHeaders = new Headers();
            myHeaders.append("token", token);
            myHeaders.append("Cookie", "ci_session=f916d27e70c5f25d36951444e9ed7222fa37d6fb");
            const formdata = new FormData();
            formdata.append("user_id", userid);
            formdata.append("amount", amount);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };
            const response = await fetch(withdrawapi, requestOptions);
            const result = await response.json();
            console.log("result----respwithdrawapionse>", result);
            if (result.status == 200) {
                showMessage({
                    message: result.message,
                    type: "success",
                    icon: "success"
                })
            }
        } catch (error) {
            console.log("errorerror---withdrawapi-->", error);
        }
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
