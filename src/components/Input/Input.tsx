import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput, TextInputProps, ViewStyle } from 'react-native';

import MaxButton from '../MaxButton/MaxButton';
import { COLORS } from '../../constants';

import { styles } from './styles';

export interface CustomInputProps extends TextInputProps {
    label?: string;
    error?: string;
    onMaxPress?: () => void;
    customStyle?: ViewStyle
}

export interface CustomInputRef {
    focus: () => void;
    blur: () => void;
}

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(
    ({ label, error, onMaxPress, customStyle, ...textInputProps }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        const inputRef = React.useRef<TextInput>(null);

        useImperativeHandle(ref, () => ({
            focus: () => inputRef.current?.focus(),
            blur: () => inputRef.current?.blur(),
        }));

        return (
            <View style={[styles.inputContainer, customStyle]}>
                {label && <Text style={styles.inputLabel}>{label}</Text>}

                <View
                    style={[
                        styles.inputWrapper,
                        !isFocused && !error ? styles.inputWrapperInactive : {},
                        isFocused && !error ? styles.inputWrapperActive : {},
                        error ? styles.inputWrapperError : {},
                    ]}
                >
                    <TextInput
                        ref={inputRef}
                        style={styles.textInput}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholderTextColor={COLORS.gray}
                        {...textInputProps}
                    />
                    {onMaxPress && <MaxButton onPress={onMaxPress} />}
                </View>

                {error && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }
);

export default CustomInput;
