import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Produto } from '../screens/Produto';
import Rotas from './tab.routes';
import { Favoritos } from '../screens/Favoritos';
import { SignIn } from '../screens/SignIn';

const stackRoutes = createStackNavigator();

export default function StackRoutes() {
    return (
        <NavigationContainer>
            <stackRoutes.Navigator>
            <stackRoutes.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerTitle: '', headerShown: false }}
                />
                <stackRoutes.Screen
                    name="Home"
                    component={Rotas}
                    options={{ headerTitle: '', headerShown: false }}
                />
                <stackRoutes.Screen
                    name="Produto"
                    component={Produto}
                    options={{ headerTitle: '', headerShown: false }}
                />
                <stackRoutes.Screen
                    name="Favoritos"
                    component={Favoritos}
                    options={{ headerTitle: '', headerShown: false }}
                />
            </stackRoutes.Navigator>
        </NavigationContainer>
    )
}