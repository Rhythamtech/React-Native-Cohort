import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white'
            },
            headerTitleAlign: 'center'
        }}>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerTitle: 'MyHome',
                    headerStyle: {
                        backgroundColor: 'green',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    },
                    headerTitleAlign: 'center'
                }} />
            <Stack.Screen name="Details" component={DetailScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen name="Profile" component={ProfileScreen}
                options={{
                    animation: "reveal_from_bottom"
                }} />
        </Stack.Navigator>
    );
}

export default function DynamicStackNavigator() {
    return <NavigationContainer>
        <MyStack />
    </NavigationContainer>
}