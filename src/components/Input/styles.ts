import { StyleSheet } from 'react-native';
import { Borders, COLORS, Fonts, Spacing } from '../../constants';

export const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
        width: '100%',
    },
    inputLabel: {
        color: COLORS.gray,
        marginBottom: 4,
        fontSize: 14,
        fontFamily: Fonts.SemiBold,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: Spacing.md,
        borderRadius: Borders.radius.lg,
        borderWidth: Borders.width.normal,
        width: '100%'
    },
    inputWrapperInactive: {
        backgroundColor: COLORS.inputInactive,
        borderColor: COLORS.lightGray,
    },
    inputWrapperActive: {
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
    },
    inputWrapperError: {
        backgroundColor: COLORS.white,
        borderColor: '#FF262E',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: Fonts.ExtrBold,
        color: COLORS.black,
        width: '100%',
    },
    maxButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: COLORS.primary,
        borderRadius: Borders.radius.md,
    },
    maxButtonText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: Fonts.SemiBold,
    },
    errorText: {
        marginTop: 4,
        color: '#FF262E',
        fontSize: 12,
        fontFamily: Fonts.Medium,
    },
});
