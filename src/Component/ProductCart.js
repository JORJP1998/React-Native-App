import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";

function ProductCart(prop) {
    const {data} = prop
    console.log(data, 3333333333333)
    return (
        <View style={style.container}>
             <Image/>
            <Text></Text>
            <Text></Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        width: "45%",
        height: 225,
        backgroundColor: "white",
        borderRadius: 20
    }
})

export default ProductCart;
