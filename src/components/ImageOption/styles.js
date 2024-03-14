import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 10,
        width: "48%",
        height: "48%",
        alignItems: "center",
        padding: 10
    },

    optionImage: {
        width: "100%",
        flex: 1
    },

    optionText: {
        fontWeight: "bold",
        color: "black"
    },

    selectedContainer: {
        backgroundColor: "#ddf4fe",
        borderColor: "#81d5fe"
    },

    selectedText: {
        fontWeight: "bold",
        color: "#40bef7"
    }
});

export default styles;
