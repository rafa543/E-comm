import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Produto } from '../screens/Produto';

// const Tab = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function Rotas() {
    // const insets = useSafeAreaInsets();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarStyle:{height:60},
                tabBarLabelStyle: {paddingBottom: 0, fontSize: 12, fontWeight: 'bold', marginBottom: 5},
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
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#40BFFF',
                tabBarInactiveTintColor: 'gray',
            })} >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                {/* <Tab.Screen name="Explore" component={Produto} options={{ headerShown: false }} />
                <Tab.Screen name="Cart" component={Produto} options={{ headerShown: false, tabBarBadge: 3 }} />
                <Tab.Screen name="Offer" component={Produto} options={{ headerShown: false }} />
                <Tab.Screen name="Account" component={Produto} options={{ headerShown: false }} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}
