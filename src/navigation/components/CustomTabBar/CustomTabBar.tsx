import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomTabBarProps, BottomTabParamList } from '../../../types/navigation';
import { TABS } from '../../../constants/tabs';
import { IconProps } from '../../../types/icon';
import { styles } from './styles';

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, navigation }) => {
    const handlePress = useCallback(
        (routeName: keyof BottomTabParamList, routeKey: string, focused: boolean) => {
            const event = navigation.emit({
                type: 'tabPress',
                target: routeKey,
                canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
                navigation.navigate(routeName);
            }
        },
        [navigation]
    );

    return (
        <SafeAreaView edges={['bottom']} style={styles.safeArea}>
            <View style={styles.tabBarContainer}>
                {state.routes.map((route, index) => {
                    const focused = state.index === index;
                    const tab = TABS.find(t => t.name === route.name);
                    if (!tab) return null;

                    const Icon: React.FC<IconProps> = tab.icon;

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() =>
                                handlePress(route.name as keyof BottomTabParamList, route.key, focused)
                            }
                            style={[styles.tabWrapper, focused && styles.tabActive]}
                            activeOpacity={0.7}
                        >
                            <Icon isActive={focused} />
                            <Text style={[styles.label, focused && styles.labelActive]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    );
};

export default CustomTabBar;
