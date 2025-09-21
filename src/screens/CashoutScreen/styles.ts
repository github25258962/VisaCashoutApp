import { StyleSheet } from 'react-native';

import { Fonts } from '../../constants';
import { COLORS } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        flex: 1,
        paddingHorizontal: Spacing.lg,
        paddingTop: Spacing.xl,
    },
    buttonContainer: {
        marginBottom: Spacing.md,
    },
    infoText: {
        fontFamily: Fonts.SemiBold,
        fontSize: Spacing.md,
        color: COLORS.gray,
        textAlign: 'center',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
});
