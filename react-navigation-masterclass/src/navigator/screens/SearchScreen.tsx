import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = () => {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Move to Profile Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Canvas White
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28, // heading-lg
    fontWeight: '700',
    color: '#282C3F', // Deep Ink
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF5200', // Swiggy Orange (primary)
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999, // rounded.full
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // shadow level 1
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF', // White text on orange
    fontSize: 14, // button-md
    fontWeight: '700',
    textTransform: 'uppercase',
  }
})

export default SearchScreen