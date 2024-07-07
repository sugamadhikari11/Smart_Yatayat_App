import React from 'react';
import Home from '../Screens/home';
import Setting from '../Screens/setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    );
}