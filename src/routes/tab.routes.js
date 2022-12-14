import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createNativeStackNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Explore } from '../screens/Explore';
import { Carrinho } from '../screens/Carrinho';

const Tab = createBottomTabNavigator();


export default function Rotas() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { paddingBottom: 0, fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Explore') {
                    iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Cart') {
                    iconName = focused ? 'cart' : 'cart-outline';
                } else if (route.name === 'Offer') {
                    iconName = focused ? 'pricetag' : 'pricetag-outline';
                } else if (route.name === 'Account') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#40BFFF',
            tabBarInactiveTintColor: 'gray',
        })} >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Carrinho} options={{ headerShown: false, tabBarBadge: 3 }} />
            {/* <Tab.Screen name="Offer" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Home} options={{ headerShown: false }} /> */}
        </Tab.Navigator>
    )
}
