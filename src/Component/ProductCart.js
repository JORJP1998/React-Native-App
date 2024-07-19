import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { Rating } from 'react-native-ratings';
import Icons from  'react-native-vector-icons/FontAwesome'
import Icons2 from  'react-native-vector-icons/Entypo'
function ProductCart(prop) {
    const { data, images } = prop;
    return (
        <View style={style.container}>
            <View style={{flexDirection: "column", width: "100%"}}>
                <View style={{width: "100%", flexDirection: "row", justifyContent: "center"}}>
                    <Image source={{ uri: images }} style={style.image} />
                </View>
                <View style={{marginTop: 9, flexDirection: "row", justifyContent: "center"}}>
                    <Text>{data.name}</Text>
                </View>
                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", paddingTop: 9, alignItems: "center"}}>
                    <View style={{width: "100%", flexDirection: "row", alignItems: "center"}}>
                        <Rating
                            type='custom'
                            ratingColor='rgb(255, 150, 51)'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={1}
                            imageSize={15}
                            style={{ paddingVertical: 10 , marginRight: 4}}
                        />
                        <Text>{data.rating}</Text>
                    </View>
                    <View>
                        <Icons name="heart" size={24} color="red"/>
                    </View>
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
