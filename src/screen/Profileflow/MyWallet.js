import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Header from '../../compontent/Header';
import WithdrawScreen from './WithdrawScreen';
import Deposite from './Deposite';

const { height, width } = Dimensions.get("screen")

const MyWallet = () => {
    const [activeTab, setActiveTab] = useState('withdraw');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Header title={"Wallet"} />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => setActiveTab('withdraw')} style={[styles.tab, activeTab === 'withdraw' && styles.activeTab]}>
                        <Text style={styles.tabText}>Withdraw</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveTab('deposit')} style={[styles.tab, activeTab === 'deposit' && styles.activeTab]}>
                        <Text style={styles.tabText}>Deposit</Text>
                    </TouchableOpacity>
                </View>
                {activeTab === 'withdraw' ? (
                    <View>
                        {/* <Text>Withdraw Content</Text> */}
                        <WithdrawScreen/>
                    </View>
                ) : (
                    <View>
                        {/* <Text>Deposit Content</Text> */}
                        <Deposite/>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    tab: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: '#004E8C',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default MyWallet;
