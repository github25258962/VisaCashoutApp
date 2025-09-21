import React from "react";
import { Pressable, Text, View } from "react-native";
import { IMAGES } from "../../../assets/images/svg";
import { COLORS } from "../../constants";
import styles from "./styles";

interface VisaCardProps {
    amount: number;
    onPress: () => void;
    selected?: boolean;
    anySelected?: boolean;
}

const VisaCard: React.FC<VisaCardProps> = ({ onPress, amount, selected = false, anySelected = true }) => {
    return (
        <View style={styles.cardWrapper}>
            {!selected && anySelected && < View style={styles.overlay} />}
            <View
                style={[
                    styles.bottomLayer,
                    selected && { backgroundColor: COLORS.primary },
                ]}
            />
            <Pressable onPress={onPress} style={styles.topLayer}>
                <IMAGES.SVG.visaLogo />
                <Text style={styles.amountText}>${amount}</Text>
            </Pressable>
        </View>
    );
};

export default VisaCard;
