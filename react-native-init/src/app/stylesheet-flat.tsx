import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styleA = StyleSheet.create({text : {color : "black", fontSize : 18}})
const styleB = StyleSheet.create({text : {color : "red", fontSize : 28, fontWeight : "bold"}})

const flat = StyleSheet.flatten([styleA.text,styleB.text]) 
const index = () => {
  return (
    <View>
      <Text style = {styleA.text} >Style A Styling</Text>
      <Text style = {styleB.text} >Style B Styling</Text>
      <Text style = {flat} >Style Flat Styling</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})