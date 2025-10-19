import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    title: {
        textAlign: 'center',
        marginVertical: 16,
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 8,
    },
});
