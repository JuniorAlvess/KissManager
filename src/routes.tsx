import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './pages/MainScreen/MainScreen'
import GeneratePassword from './pages/GeneratePassword/GeneratePassword'
import CreatePassword from './pages/CreatePassword/CreatePassword'
import ManagerPassword from './pages/ManagerPassword/ManagerPassword'
<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';

=======
import ViewPassword from './pages/ViewPassword/ViewPassword'
>>>>>>> upstream/develop

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen
                    name="Main"
                    component={MainScreen}
                />

                <Screen
                    name="GeneratePassword"
                    component={GeneratePassword}
                />


                <Screen
                    name="CreatePassword"
                    component={CreatePassword}
                />

                <Screen
                    name="ManagerPassword"
                    component={ManagerPassword}
                />

                <Screen
                    name="ViewPassword"
                    component={ViewPassword}
                />

            </Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
    );
}
