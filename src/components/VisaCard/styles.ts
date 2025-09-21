import { StyleSheet } from "react-native";
import { COLORS, Fonts } from "../../constants";

export default StyleSheet.create({
    cardWrapper: {
        width: 104,
        height: 210,
        position: "relative",
    },
    bottomLayer: {
        position: "absolute",
        top: -1,
        left: -2,
        right: -2,
        bottom: -4,
        borderRadius: 18,
        backgroundColor: COLORS.navy,
        zIndex: 0,
    },
    disabled: {
        opacity: 0.3
    },
    topLayer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 16,
        backgroundColor: COLORS.visaCard,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    amountText: {
        color: COLORS.white,
        fontFamily: Fonts.ExtrBold,
        position: "absolute",
        fontSize: 16,
        bottom: 16,
        textAlign: "center",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLORS.black,
        opacity: 0.6,
        borderRadius: 16,
        zIndex: 2,
        pointerEvents: "none",
    },
});
