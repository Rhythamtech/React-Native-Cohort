import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DetailScreen = ({ route }: any) => {
  const navigation = useNavigation<any>()
  const { username, id } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Details</Text>
      <View style={styles.card}>
        <Text style={styles.restaurantName}>{username}'s Kitchen</Text>
        <Text style={styles.metadata}>ID: {id} • 35 mins • ₹200 for two</Text>
        <Text style={styles.body}>Authentic flavors delivered fast to your doorstep. Experience the best of local cuisine with Swiggy's superfast delivery.</Text>
      </View>

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
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20, // heading-md
    fontWeight: '600',
    color: '#282C3F', // Deep Ink
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12, // rounded.lg
    width: '100%',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#E9E9EB', // hairline
  },
  restaurantName: {
    fontSize: 18, // heading-sm
    fontWeight: '600',
    color: '#282C3F',
    marginBottom: 4,
  },
  metadata: {
    fontSize: 12, // body-sm
    color: '#7E808C', // Steel
    marginBottom: 12,
  },
  body: {
    fontSize: 14, // body-md
    color: '#3D4152', // Ink
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#FF5200', // Primary Orange
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999, // rounded.full
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14, // button-md
    fontWeight: '700',
    textTransform: 'uppercase',
  }
})


export default DetailScreen