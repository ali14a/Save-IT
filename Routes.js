import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import React from 'react';
import { CustomStatusBar } from './src/common';
import { Dashboard } from './src/Dashboard';
const Stack = createStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <CustomStatusBar />
            <Stack.Navigator
                initialRouteName={"Dashboard"}
            >
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
