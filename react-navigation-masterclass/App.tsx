import * as React from 'react';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import DynamicStackNavigator from './src/navigator/stack/DynamicStackNavigator';
import NativeStaticStackNavigator from './src/navigator/stack/NativeStaticNavigator';
import DynamicTabNavigator from './src/navigator/tabs/DynamicTabNavigator';
import DynamicTabNavigatorCombine from './src/navigator/tabs/DynamicTabNavigatorCombine';
import DynamicTopTabNavigator from './src/navigator/tabs/DynamicTopTabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <DynamicTopTabNavigator />
    </SafeAreaView>
  );
}