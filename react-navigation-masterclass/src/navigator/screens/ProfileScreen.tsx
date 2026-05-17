import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarPlaceholder} />
                <View style={styles.editBadge}>
                    <Text style={styles.editBadgeText}>EDIT</Text>
                </View>
            </View>
            <Text style={styles.title}>Rhytham Negi</Text>
            <Text style={styles.subtitle}>rhytham@swiggy.com • +91 9876543210</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Details", { username: "Rhytham", id: 2 })}
                    style={styles.primaryButton}
                    activeOpacity={0.8}
                >
                    <Text style={styles.primaryButtonText}>Move to Details Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.secondaryButton}
                    activeOpacity={0.8}
                >
                    <Text style={styles.secondaryButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Canvas White
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        marginBottom: 24,
        position: 'relative',
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50, // rounded.circle
        backgroundColor: '#F0F0F0',
        borderWidth: 2,
        borderColor: '#FF5200', // Swiggy Orange border
    },
    editBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#FF5200',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4, // rounded.xs
    },
    editBadgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
    },
    title: {
        fontSize: 24, // heading-md+
        fontWeight: '700',
        color: '#282C3F', // Deep Ink
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12, // body-sm
        color: '#7E808C', // Steel
        marginBottom: 48,
    },
    buttonContainer: {
        width: '100%',
        gap: 16,
    },
    primaryButton: {
        backgroundColor: '#FF5200', // Swiggy Orange
        paddingVertical: 14,
        borderRadius: 999, // rounded.full
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 14, // button-md
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    secondaryButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#FF5200', // Orange border for secondary
        paddingVertical: 14,
        borderRadius: 999, // rounded.full
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryButtonText: {
        color: '#FF5200', // Orange text
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
    }
})

export default ProfileScreen