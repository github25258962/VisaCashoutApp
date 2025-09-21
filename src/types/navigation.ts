import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { IconProps } from './icon';
import CashoutScreen from '../screens/CashoutScreen/CashoutScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export type BottomTabParamList = {
    Home: undefined;
    Cashout: { fromHome?: boolean };
    Offers: undefined;
    Settings: undefined;
};

export const SCREENS: { [K in keyof BottomTabParamList]: React.ComponentType<any> } = {
    Home: HomeScreen,
    Offers: HomeScreen,
    Cashout: CashoutScreen,
    Settings: HomeScreen,
};

export type CustomTabBarProps = BottomTabBarProps;

export type TabItem = {
    name: keyof BottomTabParamList;
    label: string;
    icon: React.FC<IconProps>;
};
