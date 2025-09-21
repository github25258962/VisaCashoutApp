import * as Yup from 'yup';
import { userStore } from '../store/UserStore';

export const CashoutSchema = (maxAmount: number = userStore.earnings) =>
    Yup.object<{ amount: string | number }>({
        amount: Yup.number()
            .typeError('Amount must be a number')
            .min(0.01, 'Amount must be greater than $0')
            .max(maxAmount, 'Not enough funds')
            .required('Amount is required'),
    });
