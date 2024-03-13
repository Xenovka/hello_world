import React from "react";
import { Text, View } from "react-native";

import ImageOption from "./src/components/ImageOption";

import styles from "./App.styles";

const App = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Which of these is "the glass"?</Text>

            <View style={styles.optionsContainer}>
                <ImageOption />
                <ImageOption />
                <ImageOption />
                <ImageOption />
            </View>
        </View>
    );
};

export default App;
