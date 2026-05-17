import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Design Tokens from DESIGN.md
const COLORS = {
    primary: "#FF5200",
    inkDeep: "#282C3F",
    steel: "#7E808C",
    canvas: "#FFFFFF",
    hairline: "#E9E9EB"
};

function HomeScreen() {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Home Screen</Text>
        </View>
    )
}

function ProfileScreen() {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Profile Screen</Text>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Settings Screen</Text>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.steel,
            tabBarStyle: {
                backgroundColor: COLORS.canvas,
                borderTopColor: COLORS.hairline,
                paddingBottom: 8,
                paddingTop: 8,
            },

            tabBarLabelStyle: {
                fontSize: 11, // typography.caption-bold
                fontWeight: '700',
            },
            headerStyle: {
                backgroundColor: COLORS.canvas,
                borderBottomColor: COLORS.hairline,
                borderBottomWidth: 1,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTitleStyle: {
                fontSize: 18, // heading-sm
                fontWeight: '700',
                color: COLORS.inkDeep,
            },
        })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home Screen"
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.canvas,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    screenTitle: {
        fontSize: 20, // heading-md
        fontWeight: '700',
        color: COLORS.inkDeep,
    }
});

export default function DynamicTopTabNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}