import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import RootNavigation from './RootNavigation';

import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';
import ProfileNavigation from './ProfileNavegation';


const Tab = createBottomTabNavigator();

const TabNavegation = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                title: "",
                headerBackground: Colors.heavyBlue
            }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                    (
                        <FontAwesome name="home"
                            size={28}
                            color={focused ? Colors.heavyBlue : Colors.beige} />
                    )
                }}
                name="rootNavigation" component={RootNavigation} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                    (

                        <FontAwesome name="user"
                            size={28}
                            color={focused ? Colors.heavyBlue : Colors.beige} />
                    )
                }}
                name="ProfileNavegation" component={ProfileNavigation} />
        </Tab.Navigator>

    )
}

export default TabNavegation

