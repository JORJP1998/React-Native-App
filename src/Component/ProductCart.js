import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";

function ProductCart(prop) {
    const { data, images } = prop;
    return (
        <View style={style.container}>
            <View style={{flexDirection: "column", width: "100%"}}>
                <View style={{width: "100%", flexDirection: "row", justifyContent: "center"}}>
                    <Image source={{ uri: images }} style={style.image} />
                </View>
                <View style={{marginTop: 9, flexDirection: "row", justifyContent: "center"}}>
                    <Text>{data.title}</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "45%",
        height: 250,
        backgroundColor: "white",
        borderRadius: 20,
        marginBottom: 31,
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: 121,
    }
});

export default ProductCart;
