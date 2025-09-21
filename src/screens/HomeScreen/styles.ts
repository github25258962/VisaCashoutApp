import { StyleSheet } from 'react-native';
import { COLORS, Fonts, Metrics } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        position: 'relative'
    },
    welcome: {
        fontFamily: Fonts.ExtrBold,
        fontSize: Metrics.moderateScale(24),
        color: COLORS.primary
    },
    animation: {
        width: Metrics.scale(300),
        height: Metrics.verticalScale(300),
        marginBottom: Metrics.verticalScale(20),
    },
    text: {
        fontSize: Metrics.moderateScale(18),
        marginVertical: Metrics.verticalScale(5),
        fontFamily: Fonts.SemiBold,
        color: COLORS.primary
    },
    buttonContainer: {
        position: 'absolute',
        bottom: Metrics.verticalScale(40),
        width: '100%',
        paddingHorizontal: Metrics.scale(16)
    }
});
