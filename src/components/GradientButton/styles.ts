import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Borders, Fonts, Spacing } from '../../constants';

export const styles = StyleSheet.create({
    pressable: {
        width: '100%',
        borderWidth: Borders.width.normal,
        borderColor: COLORS.borderActtiveGradientStart,
        borderBottomColor: COLORS.borderActiveGradientEnd,
        borderTopWidth: 1,
        borderRadius: Borders.radius.lg,
    },
    disabledPressable: {
        opacity: 1,
        borderWidth: Borders.width.normal,
        borderColor: COLORS.disabledBorder,
        borderRadius: Borders.radius.lg
    },
    container: {
        position: 'relative',
    },
    shadow: {
        position: 'absolute',
        top: 4,
        left: 0,
        right: 0,
        height: 44,
        backgroundColor: COLORS.shadowRed,
        borderRadius: Borders.radius.lg,
    },
    disabledShadow: {
        backgroundColor: COLORS.disabledBorder,
    },
    gradient: {
        height: 44,
        borderRadius: Borders.radius.lg,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
    },
    disabledGradient: {
        backgroundColor: COLORS.disabledBackground,
    },
    text: {
        fontFamily: Fonts.ExtrBold,
        fontSize: Spacing.lg,
        color: COLORS.white,
        textAlign: 'center',
        textShadowOffset: { width: 0, height: 1 },
        textShadowColor: COLORS.textShadow,
    },
    disabledText: {
        textShadowColor: COLORS.disabledTextShadow,
        textShadowOffset: { width: 0, height: 1 },
    },
});