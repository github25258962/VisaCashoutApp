import { Metrics } from "./metrics";
import { Fonts } from "./fonts";

export const Typography = {
    bold: {
        fontFamily: Fonts.Bold,
        fontSize: Metrics.moderateScale(24),
    },
    semiBold: {
        fontFamily: Fonts.SemiBold,
        fontSize: Metrics.moderateScale(20),
    },
    regular: {
        fontFamily: Fonts.Regular,
        fontSize: Metrics.moderateScale(16),
    },
    small: {
        fontFamily: Fonts.Regular,
        fontSize: Metrics.moderateScale(13),
    },
};
