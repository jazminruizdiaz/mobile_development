import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

        marginHorizontal: 16,
        marginTop: 20,
        backgroundColor: "#000",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 180,
        justifyContent: "center",

    },
    overlay: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        borderRadius: 12,
    },


    textContainer: {
        padding: 16,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    description: {
        color: "#ccc",
        marginTop: 6,
        fontSize: 14,
        lineHeight: 20,
    },
    button: {
        width: "100%",
        marginVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 8,
        //marginHorizontal: 16,
        //marginBottom: 16,
        alignItems: "center",
    },
    buttonText: {
        color: "#000",
        fontWeight: "600",
        fontSize: 16,

    },
});