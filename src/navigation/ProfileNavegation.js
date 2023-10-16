import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Map from '../screens/Map';



const Stack = createNativeStackNavigator();
const ProfileNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='profile'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="map" component={Map} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation


