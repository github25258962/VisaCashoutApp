export interface CashoutFormValues {
    amount: string;
}

export interface CashoutFormErrors {
    amount?: string;
}

export interface CashoutFormTouched {
    amount?: boolean;
}


export interface InputHandlers {
    onSelectAmount: (amt: number | null) => void;
    handleInputChange: (text: string) => void;
    handleInputBlur: () => void;
    handleMaxPress: () => void;
}
