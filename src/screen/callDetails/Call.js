import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const Call = () => {
    const data = [
        {
            id: "1",
            title: "Call type",
            subtitle: "Installation"
        },
        {
            id: "2",
            title: "Call Number",
            subtitle: "2465778930"
        },
        {
            id: "3",
            title: "Nature of Complaint",
            subtitle: "Installation required"
        },
        {
            id: "4",
            title: "Registered Date",
            subtitle: "27/03/2024"
        },
        {
            id: "5",
            title: "Call type",
            subtitle: "28/03/2024"
        },
        {
            id: "6",
            title: "Status",
            subtitle: "28/03/2024"
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
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
});

export default Call;
