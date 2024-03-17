import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Header from "./src/components/Header";

import styles from "./App.styles";
import questions from "./assets/data/allQuestions";

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
    const [lives, setLives] = useState(5);

    useEffect(() => {
        if (currentQuestionIndex >= questions.length) {
            Alert.alert("You have completed the quiz!");
            setCurrentQuestionIndex(0);
        } else {
            setCurrentQuestion(questions[currentQuestionIndex]);
        }
    }, [currentQuestionIndex]);

    const restart = () => {
        setCurrentQuestionIndex(0);
        setLives(5);
    };

    const onCorrect = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const onWrong = () => {
        if (lives <= 1) {
            Alert.alert("Game Over!", "Try Again", [
                {
                    text: "Try Again",
                    onPress: () => {
                        restart();
                    }
                }
            ]);
        } else {
            Alert.alert("Incorrect!");
            setLives(lives - 1);
        }
    };

    return (
        <View style={styles.root}>
            <Header progress={currentQuestionIndex / questions.length} lives={lives} />

            {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" ? (
                <ImageMultipleChoiceQuestion question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />
            ) : null}

            {currentQuestion.type === "OPEN_ENDED" ? (
                <OpenEndedQuestion question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />
            ) : null}
        </View>
    );
};

export default App;
