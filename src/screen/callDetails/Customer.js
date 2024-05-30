import React from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';

const Customer = ({ bookingDetails }) => {
    const bookingservice = bookingDetails.service_details

    const data = [
        {
            id: "1",
            title: "Customer name",
            subtitle: "Installation"
        },
        {
            id: "2",
            title: "Area",
            subtitle: "Delhi"
        },
        {
            id: "3",
            title: "City",
            subtitle: "--"
        },
        {
            id: "4",
            title: "Address",
            subtitle: "Kriti tower,janakpuri delhi Kriti tower,janakpuri delhi Kriti tower,janakpuri delhi"
        },
        {
            id: "5",
            title: "Mobile number",
            subtitle: "6348344988"
        },
        {
            id: "6",
            title: "Email",
            subtitle: "gsd@gmail.com"
        }
    ];

    const renderItem = ({ item }) => (
        <View>
            <View style={styles.item}>
                <Text style={styles.title}>Slot Date</Text>
                <Text style={styles.subtitle}>{item.slot_date}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Slot Time</Text>
                <Text style={styles.subtitle}>{item.slot_time}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.subtitle}>{item.address}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Shipping Charge</Text>
                <Text style={styles.subtitle}>{item.shipping_charge}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>House Number</Text>
                <Text style={styles.subtitle}>{item.house_str_no}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.subtitle}>{item.email}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Order Notes</Text>
                <Text style={styles.subtitle}>{item.order_note}</Text>
            </View>

        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={bookingservice}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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

});

export default Customer;
