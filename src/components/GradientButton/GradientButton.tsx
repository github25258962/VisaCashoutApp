import React from 'react';
import { Text, Pressable, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { COLORS } from '../../constants/colors';

interface GradientButtonProps {
    onPress: () => void;
    title?: string;
    disabled?: boolean;
    customStyle?: ViewStyle;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onPress, title = 'Cashout', disabled = false, customStyle }) => {
    return (
        <Pressable
            onPress={disabled ? undefined : onPress}
            style={[styles.pressable, customStyle, disabled && styles.disabledPressable]}
            disabled={disabled}
        >
            <View style={styles.container}>
                <View style={[styles.shadow, disabled && styles.disabledShadow]} />
                {disabled ? (
                    <View style={[styles.gradient, styles.disabledGradient]}>
                        <Text style={[styles.text, styles.disabledText]}>
                            {title}
                        </Text>
                    </View>
                ) : (
                    <LinearGradient
                        colors={[COLORS.gradientYellow, COLORS.gradientRed]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.gradient}
                    >
                        <Text style={styles.text}>
                            {title}
                        </Text>
                    </LinearGradient>
                )}
            </View>
        </Pressable>
    );
};

export default GradientButton;