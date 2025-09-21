export type ColorKey =
    | 'primary'
    | 'gray'
    | 'lightGray'
    | 'error'
    | 'white'
    | 'red'
    | 'gradientYellow'
    | 'gradientRed'
    | 'shadowRed'
    | 'textShadow'
    | 'disabledTextShadow'
    | 'disabledBackground'
    | 'disabledBorder'
    | 'borderActtiveGradientStart'
    | 'borderActiveGradientEnd'
    | 'visaCard'
    | 'navy'
    | 'black'
    | 'midGray'
    | 'inputInactive'

    ;

export type ColorsType = Record<ColorKey, string>;
