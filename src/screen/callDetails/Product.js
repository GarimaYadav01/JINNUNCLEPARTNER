import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const { height, width } = Dimensions.get("screen");
const Product = () => {
    const navigation = useNavigation();
    const [imageUris, setImageUris] = useState([]);
    const data = [
        {
            id: "1",
            title: "Product Category",
            subtitle: "Air Conditioner"
        },
        {
            id: "2",
            title: "Product Sub-category",
            subtitle: "2465778930"
        },
        {
            id: "3",
            title: "Model No",
            subtitle: "Installation required"
        },
        {
            id: "4",
            title: "Capacity",
            subtitle: "27/03/2024"
        },
        {
            id: "5",
            title: "Unit Location",
            subtitle: "28/03/2024"
        },
        {
            id: "6",
            title: "IDU Serial Number",
            subtitle: "--"
        },
        {
            id: "7",
            title: "ODU Serial Number",
            subtitle: "--"
        }
    ];
    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            if (!image.cancelled) {
                setImageUris([...imageUris, image.path]);
            }
        }).catch((error) => {
            console.log('Error:', error);
        });
    };
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );

    const renderImage = (uri) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} />
        </View>
    );
    return (
        <ScrollView style={{ flexGrow: 1, backgroundColor: "#FFF", paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.con}>
                    <Text style={styles.text}>Take an action for this Product</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10 }}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Change")}>
                            <Text style={styles.text1}>Change</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Add")}>
                            <Text style={styles.text1}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                <View style={styles.container}>

                    {imageUris.map((uri, index) => (
                        renderImage(uri)
                    ))}

                    <TouchableOpacity style={[styles.btn, { alignSelf: "center", marginTop: height * 0.03 }]} onPress={openCamera}>
                        <Text style={styles.text1}>Open Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
    con: {
        width: width * 0.9,
        borderWidth: 1,
        height: height * 0.1,
        alignSelf: "center",
        backgroundColor: "#FFF",
        borderColor: "#FFF",
        borderRadius: 10
    },
    text: {
        color: "black",
        fontSize: 17,
        fontWeight: "500",
        textAlign: "center"
    },
    btn: {
        width: width * 0.3,
        borderWidth: 1,
        height: height * 0.035,
        backgroundColor: "#004E8C",
        borderColor: "#004E8C",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "center"
    },
    text1: {
        color: "white",
        fontSize: 15
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default Product;
