import { StyleSheet } from "react-native";
import { colors } from "../../../../../../constants/colors";

export const styles = StyleSheet.create({
    actorCard: {
        marginRight: 12,
        alignItems: "center",
        width: 100,
    },
    actorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 6,
    },
    actorName: {
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center",
        color: colors.primary
    },
    actorCharacter: {
        fontSize: 11,
        color: "#fff",
        textAlign: "center",
    },
});