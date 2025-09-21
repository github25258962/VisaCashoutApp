import { StyleSheet } from 'react-native';
import { COLORS, Fonts } from '../../constants';

export const styles = StyleSheet.create({
    bottomLayer: {
        position: 'absolute',
        width: 37,
        height: 23,
        borderRadius: 6,
        backgroundColor: COLORS.primary,
    },
    topLayer: {
        width: 35,
        height: 20,
        borderRadius: 6,
        backgroundColor: '#C7D5FC',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        marginLeft: 1,
    },
    buttonText: {
        color: COLORS.primary,
        fontSize: 12,
        fontFamily: Fonts.ExtrBold,
    },
});
