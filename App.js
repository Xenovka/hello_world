import React, { useState } from "react";
import { Text, View } from "react-native";

import ImageOption from "./src/components/ImageOption";

import styles from "./App.styles";
import question from "./assets/data/oneQuestionWithOption";
import Button from "./src/components/Button";

const App = () => {
    const [selected, setSelected] = useState(null);

    const onButtonPress = () => {};

    return (
        <View style={styles.root}>
            <Text style={styles.title}>{question.question}</Text>

            <View style={styles.optionsContainer}>
                {question.options.map((option) => (
                    <ImageOption
                        key={option.id}
                        image={option.image}
                        text={option.text}
                        isSelected={selected?.id === option.id}
                        onPress={() => setSelected(option)}
                    />
                ))}
            </View>

            <Button text="Check" onPress={onButtonPress} disabled={!selected} />
        </View>
    );
};

export default App;
