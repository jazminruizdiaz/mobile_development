import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { ThemeColors } from "../../constants/colorsFun";

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: colors.background,
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
