import { StyleSheet } from 'react-native';
import { COLORS, Fonts, Spacing } from '../../../constants';

export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: COLORS.white,
    },
    tabBarContainer: {
        height: 70,
        borderTopWidth: 1,
        flexDirection: 'row',
        borderTopColor: COLORS.lightGray,
        backgroundColor: COLORS.white,
    },
    tabWrapper: {
        flex: 1,
        paddingTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'transparent',
    },
    tabActive: {
        borderTopWidth: 2,
        borderTopColor: COLORS.primary,
    },
    label: {
        marginTop: Spacing.xs,
        color: COLORS.gray,
        fontSize: Spacing.md,
        fontFamily: Fonts.Medium,
    },
    labelActive: {
        color: COLORS.primary,
        fontFamily: Fonts.Bold,
        borderTopColor: COLORS.primary,
    },
});
