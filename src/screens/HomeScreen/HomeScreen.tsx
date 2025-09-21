import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { observer } from 'mobx-react-lite';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { userStore } from '../../store/UserStore';
import { BottomTabParamList } from '../../types/navigation';
import { styles } from './styles';
import GradientButton from '../../components/GradientButton/GradientButton';

type Props = NativeStackScreenProps<BottomTabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {

    // useEffect(() => {
    //     userStore?.reset();
    // }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome!</Text>
            <LottieView
                source={require('../../../assets/animations/cashout.json')}
                autoPlay
                loop
                style={styles.animation}
            />
            <Text style={styles.text}>Earnings: ${userStore.earnings.toFixed(2)}</Text>
            <Text style={styles.text}>Total Withdrawn: ${userStore.totalWithdrawn.toFixed(2)}</Text>
            <View style={styles.buttonContainer}>
                <GradientButton onPress={() => navigation.navigate('Cashout', { fromHome: true })} title='Go to Cashout' />
            </View>
        </View>
    );
};

export default observer(HomeScreen);
