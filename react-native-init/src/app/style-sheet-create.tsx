
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <View style = {styles.card}>
      <Text style = {styles.title} >I am the Heading</Text>
      <Text style = {styles.subtitle} >I am the Sub Heading</Text>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  card : {
    backgroundColor :"white",
    borderRadius: 16,
    padding : 20,
    margin : 16,
    elevation : 5
  },
  title : {
    fontWeight : "bold"
  },
  subtitle : {

    fontWeight : "300",
    fontSize : 12

  }
})