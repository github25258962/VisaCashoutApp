import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { BottomTabParamList } from '../../types/navigation';
import CustomInput from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import { IMAGES } from '../../../assets/images/svg';
import { styles } from './styles';
import GradientButton from '../../components/GradientButton/GradientButton';
import DenominationCards from '../../components/DenominationCards/DenominationCard';
import useCashout from '../../hooks/useCashout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CashoutSchema } from '../../validation/cashoutValidation';
import SuccessModal from '../../components/Modals/SuccessModal/SuccessModal';
import { userStore } from '../../store/UserStore';
import { DENOMINATIONS } from '../../constants/cashout';
import { Metrics } from '../../constants';

type Props = NativeStackScreenProps<BottomTabParamList, 'Cashout'>;

const CashoutScreen: React.FC<Props> = ({ route, navigation }) => {
    const {
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
    } = useCashout(navigation);

    const showBackButton = route.params?.fromHome || hasError;

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Metrics.isIOS ? 'padding' : 'height'}>
                <Header title="Visa" leftIcon={showBackButton ? <IMAGES.SVG.backButton /> : undefined} onLeftPress={showBackButton ? goBack : undefined} />
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); inputRef.current?.blur(); }}>
                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                        <View style={styles.content}>
                            <Formik
                                innerRef={formikRef}
                                initialValues={{ amount: '' }}
                                validationSchema={CashoutSchema(userStore.earnings)}
                                onSubmit={handleCashout}
                                validateOnChange
                                validateOnBlur
                            >
                                {({ handleSubmit, values, errors, touched, setFieldValue, setFieldTouched, validateField }) => {
                                    React.useEffect(() => setHasError(Object.keys(errors).length > 0), [errors]);

                                    return (
                                        <View>
                                            <DenominationCards
                                                denominations={DENOMINATIONS}
                                                selectedAmount={selectedAmount}
                                                onSelect={(amt) => onSelectAmount(amt, setFieldValue, setFieldTouched)}
                                            />
                                            <CustomInput
                                                customStyle={{ marginTop: 16, marginBottom: 12 }}
                                                ref={inputRef}
                                                label={`Your Earnings: $${userStore.earnings.toFixed(2)}`}
                                                value={displayValue}
                                                onFocus={() => { if (displayValue?.startsWith('$')) setFieldValue('amount', values.amount); }}
                                                onChangeText={(text) => handleInputChange(text, setFieldValue, setFieldTouched, validateField)}
                                                onBlur={() => handleInputBlur(values, setFieldTouched, validateField)}
                                                placeholder="$0.00"
                                                error={errors.amount && touched.amount ? errors.amount : undefined}
                                                onMaxPress={() => handleMaxPress(setFieldValue, setFieldTouched)}
                                            />
                                            <View style={styles.buttonContainer}>
                                                <GradientButton onPress={handleSubmit} title="Cashout" disabled={!values.amount || !!errors.amount} />
                                            </View>
                                            <Text style={styles.infoText}>Withdrawal limit is ${userStore.earnings}.</Text>
                                        </View>
                                    );
                                }}
                            </Formik>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <SuccessModal visible={modalVisible} amount={amount} onClose={handleClose} />
        </SafeAreaView>
    );
};

export default observer(CashoutScreen);
