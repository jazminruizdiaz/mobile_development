import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 20,
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
        paddingVertical: 16,
        gap: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    description: {
        marginTop: 6,
        fontSize: 14,
        lineHeight: 20,
    },
    buttonText: {
        fontWeight: "600",
    },
});