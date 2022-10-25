import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();

export default StackRoutes()(
    return (
        <stackRoutes.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: colors.white },
            }}
        >
            <stackRoutes.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: '' }}
            />
        </stackRoutes.Navigator>
    )
)