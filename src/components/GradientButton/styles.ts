import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Fonts, Spacing } from '../../constants';

export const styles = StyleSheet.create({
    pressable: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.borderActtiveGradientStart,
        borderBottomColor: COLORS.borderActiveGradientEnd,
        borderTopWidth: 1,
        borderRadius: 12,
    },
    disabledPressable: {
        opacity: 1,
        borderWidth: 1,
        borderColor: COLORS.disabledBorder,
        borderRadius: 12
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
        borderRadius: 12,
    },
    disabledShadow: {
        backgroundColor: COLORS.disabledBorder,
    },
    gradient: {
        height: 44,
        borderRadius: 12,
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