import React from 'react';
import { TouchableOpacity, Text, View, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

interface MaxButtonProps {
    onPress?: (event: GestureResponderEvent) => void;
    title?: string;
}

const MaxButton: React.FC<MaxButtonProps> = ({ onPress, title = 'MAX' }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={styles.bottomLayer} />
            <View style={styles.topLayer}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MaxButton;
