import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserStore {
    earnings = 18.25;
    totalWithdrawn = 0;

    constructor() {
        makeAutoObservable(this);
        makePersistable(this, {
            name: 'UserStore',
            properties: ['earnings', 'totalWithdrawn'],
            storage: AsyncStorage,
        });
    }

    updateEarnings(amount: number) {
        this.earnings = amount;
    }

    reset() {
        this.earnings = 18.25;
        this.totalWithdrawn = 0;
    }


    async cashout(amount: number) {
        if (amount <= this.earnings) {
            this.earnings -= amount;
            this.totalWithdrawn += amount;
            return true;
        } else {
            throw new Error('Not enough funds');
        }
    }
}

export const userStore = new UserStore();
