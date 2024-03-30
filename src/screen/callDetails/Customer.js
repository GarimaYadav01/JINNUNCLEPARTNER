import React from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';


const Customer = () => {
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
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
