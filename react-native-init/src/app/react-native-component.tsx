import { View, Text, Button, Switch } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native';

const HomeScreen = () => {

  const items = Array.from({length:20}, (_,i)=>`Item ${i+1}`);
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <ScrollView
    style = {{
      flex:1, backgroundColor: "yellow"
    }}
    contentContainerStyle = {{
      alignItems : "center"
    }}>
      {
        items.map((item) => (
          <Text key={item}>item</Text>
        ))
      }
      <Button title='Hello' />
      <Switch value ={isDarkMode}
      onValueChange={setDarkMode} />

    </ScrollView>
  )
}

export default HomeScreen;
