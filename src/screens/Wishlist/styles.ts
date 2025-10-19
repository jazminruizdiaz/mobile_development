import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: colors.background,
    },
    title: {
        marginVertical: 16,
        flex: 1
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 8,
    },
    emptyContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
