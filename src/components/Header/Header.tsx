import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
interface HeaderProps {
    title: string;
    leftIcon?: React.ReactNode;
    onLeftPress?: () => void;
    containerStyle?: object;
    titleStyle?: object;
}

const Header: React.FC<HeaderProps> = ({ title, leftIcon, onLeftPress, containerStyle, titleStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {leftIcon ? (
                <TouchableOpacity style={styles.leftIconContainer} onPress={onLeftPress}>
                    {leftIcon && <>{leftIcon}</>}
                </TouchableOpacity>
            ) : (
                <View style={styles.leftIconContainer} />
            )}
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>
                {title}
            </Text>
            <View style={styles.rightPlaceholder} />
        </View>
    );
};

export default Header;
