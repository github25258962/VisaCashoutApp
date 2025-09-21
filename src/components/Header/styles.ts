import { StyleSheet } from "react-native";
import { COLORS, Fonts, Spacing } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        paddingHorizontal: Spacing.lg,
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
    },
    leftIconContainer: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftIcon: {
        resizeMode: 'contain',
    },
    title: {
        textAlign: 'center',
        fontWeight: '600',
        color: COLORS.black,
        fontFamily: Fonts.Bold,
        fontSize: Spacing.lg
    },
    rightPlaceholder: {
        width: 32,
        height: 32,
    },
});
