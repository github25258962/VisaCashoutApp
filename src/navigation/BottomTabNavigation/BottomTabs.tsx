import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREENS, BottomTabParamList } from '../../types/navigation';
import CustomTabBar from '../components/CustomTabBar/CustomTabBar';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            {Object.entries(SCREENS).map(([name, Component]) => (
                <Tab.Screen
                    key={name}
                    name={name as keyof BottomTabParamList}
                    component={Component}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTabs;
