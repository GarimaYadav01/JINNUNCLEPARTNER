import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const Call = ({ bookingDetails }) => {
    console.log("bookingDetails--bookingDetails------>---->", bookingDetails)

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


    const bookinglist = bookingDetails.data

    console.log("bookinglistbookinglist----->", bookinglist)



    return (
        <View style={styles.container}>
            <FlatList
                data={bookinglist}
                // data={data}
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

export default Call;
