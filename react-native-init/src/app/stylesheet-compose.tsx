import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  const isActive = false;
  const buttonStyle = StyleSheet.compose(
    styles.button, 
    isActive ? styles.activeButton : null
  )
  return (
    // Inline way with StyleSheet
    //<View style = {styles.container}>
    //   <View style= {[styles.button, isActive && styles.activeButton]}>
    //     <Text style = {styles.buttonText}>Composed Style</Text>
    //   </View>
    // </View>

    // Button sytling with compose 
    <View style = {styles.container}>
      {/* @ts-ignore */}
      <View style= {buttonStyle}>
        <Text style = {styles.buttonText}>Composed Style</Text>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#ccc',   // Default grey
  },
  activeButton: {
    backgroundColor: '#6C63FF', // Override to purple when active
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});