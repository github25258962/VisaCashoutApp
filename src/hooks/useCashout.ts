import { useRef, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { userStore } from '../store/UserStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../types/navigation';
import { CashoutFormValues } from '../types/cashout';
import { FormikHelpers } from 'formik';

export default function useCashout(navigation: NativeStackNavigationProp<BottomTabParamList>) {
    const inputRef = useRef<any>(null);
    const formikRef = useRef<any>(null);
    const validationTimeoutRef = useRef<any | null>(null);

    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [displayValue, setDisplayValue] = useState<string>('');
    const [modalVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState(0);
    const [hasError, setHasError] = useState(false);

    const debounceValidation = useCallback((fn: () => void) => {
        if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);
        validationTimeoutRef.current = setTimeout(fn, 300);
    }, []);

    const handleCashout = useCallback(
        async (values: CashoutFormValues, actions: FormikHelpers<CashoutFormValues>) => {
            const amt = parseFloat(values.amount);
            if (isNaN(amt) || amt <= 0) return;
            try {
                await userStore.cashout(amt);
                setAmount(amt);
                setModalVisible(true);
            } catch (error) {
                Alert.alert('Error', (error as Error).message);
            }
        },
        []
    );

    const handleClose = useCallback(() => {
        setModalVisible(false);
        setSelectedAmount(null);
        setDisplayValue('');
    }, []);

    const goBack = useCallback(() => {
        navigation.goBack();
        setSelectedAmount(null);
        setDisplayValue('');
        formikRef.current?.resetForm();
    }, [navigation]);

    const onSelectAmount = useCallback(
        (amt: number | null, setFieldValue: any, setFieldTouched: any) => {
            setSelectedAmount(amt);
            if (amt === null) {
                setFieldValue('amount', '');
                setDisplayValue('');
            } else {
                setFieldValue('amount', amt.toString());
                setDisplayValue(`$${amt.toFixed(2)}`);
                setFieldTouched('amount', true, false);
            }
            inputRef.current?.blur();
        },
        []
    );

    const handleInputChange = useCallback(
        (text: string, setFieldValue: any, setFieldTouched: any, validateField: any) => {
            const numeric = text.replace(/[^0-9.]/g, '');
            setFieldValue('amount', numeric);
            const num = parseFloat(numeric);
            setSelectedAmount(userStore.earnings >= num ? num : null);
            setDisplayValue(numeric);
            if (numeric.length > 0) {
                debounceValidation(() => {
                    setFieldTouched('amount', true);
                    validateField('amount');
                });
            }
        },
        [debounceValidation]
    );

    const handleInputBlur = useCallback(
        (values: CashoutFormValues, setFieldTouched: any, validateField: any) => {
            if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);
            setFieldTouched('amount', true);
            validateField('amount');
            const num = parseFloat(values.amount);
            setDisplayValue(!isNaN(num) && num > 0 ? `$${num.toFixed(2)}` : '');
        },
        []
    );

    const handleMaxPress = useCallback(
        (setFieldValue: any, setFieldTouched: any) => {
            const formatted = userStore.earnings.toFixed(2);
            setFieldValue('amount', formatted, false);
            setFieldTouched('amount', true, false);
            if (formikRef.current) formikRef.current.setErrors({});
            setDisplayValue(`$${formatted}`);
            setSelectedAmount(userStore.earnings);
            inputRef.current?.blur();
        },
        []
    );

    return {
        inputRef,
        formikRef,
        selectedAmount,
        displayValue,
        modalVisible,
        amount,
        hasError,
        setHasError,
        handleCashout,
        handleClose,
        goBack,
        onSelectAmount,
        handleInputChange,
        handleInputBlur,
        handleMaxPress,
    };
}
