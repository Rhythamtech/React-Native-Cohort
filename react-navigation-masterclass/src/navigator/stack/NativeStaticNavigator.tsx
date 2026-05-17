import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';


// Create Stack Navigator using Screens
const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerTitle: "Home Screen 101",
      }
    },
    Details: DetailScreen,
    Profile: ProfileScreen
  }
}
);


const Navigation = createStaticNavigation(Stack)

export default function App() {
  return <Navigation />
}