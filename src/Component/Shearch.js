import React from 'react';
import { TextInput, View, StyleSheet } from "react-native";

function Search() {
    return (
        <View>
            <TextInput style={styles.input} placeholder="Search" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 60,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        backgroundColor: "rgb(255, 255, 255)",
        paddingLeft: 15,
        paddingRight: 15
    }
});

export default Search;

