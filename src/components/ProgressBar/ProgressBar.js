import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressBar = ({ progress }) => {
    return (
        <View style={styles.bg}>
            <View style={[styles.fg, { width: `${progress * 100}%` }]}>
                <View style={styles.highlight} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "lightgrey",
        height: 20,
        borderRadius: 10,
        flex: 1
    },
    fg: {
        backgroundColor: "#fac800",
        borderRadius: 10,
        width: "50%",
        flex: 1
    },
    highlight: {
        backgroundColor: "#fad131",
        width: "90%",
        height: 5,
        borderRadius: 5,
        marginTop: 5,
        alignSelf: "center"
    }
});

export default ProgressBar;
