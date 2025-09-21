import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import styles from "./styles";
import GradientButton from "../../GradientButton/GradientButton";

type Props = {
    visible: boolean;
    onClose: () => void;
    amount: number;
};

export default function SuccessModal({ visible, onClose, amount }: Props) {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.backdrop}>
                <View style={styles.card}>
                    <Text style={styles.title}>Success</Text>
                    <Text style={styles.message}>You cashed out ${amount.toFixed(2)} successfully.</Text>
                    <View style={styles.row}>
                        <GradientButton title="Close" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
