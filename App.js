import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";

import styles from "./App.styles";
// import questions from "./assets/data/imageMulatipleChoiceQuestions";
// import questions from "./assets/data/openEndedQuestions";
import questions from "./assets/data/allQuestions";

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

    useEffect(() => {
        if (currentQuestionIndex >= questions.length) {
            Alert.alert("You have completed the quiz!");
            setCurrentQuestionIndex(0);
        } else {
            setCurrentQuestion(questions[currentQuestionIndex]);
        }
    }, [currentQuestionIndex]);

    const onCorrect = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const onWrong = () => {
        Alert.alert("Incorrect!");
    };

    return (
        <View style={styles.root}>
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
