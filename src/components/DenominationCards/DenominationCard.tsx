import React from 'react';
import { View } from 'react-native';
import VisaCard from '../../components/VisaCard/VisaCard';
import { styles } from './styles';

type Props = {
    denominations: number[];
    selectedAmount: number | null;
    onSelect: (amount: number | null) => void;
};

const DenominationCards: React.FC<Props> = ({ denominations, selectedAmount, onSelect }) => (
    <View style={styles.visaContainer}>
        {denominations.map((denom, idx) => (
            <VisaCard
                key={idx}
                amount={denom}
                selected={selectedAmount === denom}
                anySelected={selectedAmount !== null}
                onPress={() =>
                    selectedAmount === denom ? onSelect(null) : onSelect(denom)
                }
            />
        ))}
    </View>
);

export default DenominationCards;
