import React, { useState } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

import ImageOption from "../ImageOption";
import Button from "../Button";

import styles from "./styles";

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
    const [selected, setSelected] = useState(null);

    const onButtonPress = () => {
        if (selected.correct) {
            onCorrect();
            setSelected(null);
        } else {
            onWrong();
        }
    };

    return (
        <>
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
        </>
    );
};

ImageMultipleChoiceQuestion.propTypes = {
    question: PropTypes.shape({
        question: PropTypes.string,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                image: PropTypes.any,
                text: PropTypes.string,
                correct: PropTypes.bool
            })
        ).isRequired
    }).isRequired,
    onCorrect: PropTypes.func,
    onWrong: PropTypes.func
};

ImageMultipleChoiceQuestion.defaultProps = {
    onCorrect: () => {},
    onWrong: () => {}
};

export default ImageMultipleChoiceQuestion;
