import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../screens/Home';
import Message from '../screens/Message';
import { navigationRef } from '../../RootNavigation';

const Stack = createStackNavigator();
function NavigationStack() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Message' component={Message} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;