import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Header from "./src/components/Header";

import styles from "./App.styles";
import questions from "./assets/data/allQuestions";

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
    const [lives, setLives] = useState(5);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (currentQuestionIndex >= questions.length) {
            Alert.alert("You have completed the quiz!");
            setCurrentQuestionIndex(0);
        } else {
            setCurrentQuestion(questions[currentQuestionIndex]);
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if (hasLoaded) {
            saveData();
        }
    }, [lives, currentQuestionIndex, hasLoaded]);

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

    const saveData = async () => {
        await AsyncStorage.setItem("lives", lives.toString());
        await AsyncStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());
    };

    const loadData = async () => {
        const loadedLives = await AsyncStorage.getItem("lives");
        if (loadedLives) {
            setLives(parseInt(loadedLives));
        }

        const loadedCurrentQuestionIndex = await AsyncStorage.getItem("currentQuestionIndex");
        if (loadedCurrentQuestionIndex) {
            setCurrentQuestionIndex(parseInt(loadedCurrentQuestionIndex));
        }

        setHasLoaded(true);
    };

    if (!hasLoaded) {
        return <ActivityIndicator />;
    }

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
