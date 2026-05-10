
import  {View,Text,Image, TextInput, } from 'react-native';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

//  Async way to get Metrics

function UnSafeScreen(){
  return <View>
     <Text style={{ color: "#0000", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#00ff", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
  </View>
}


const index = () => {

  const insets = useSafeAreaInsets();
  return (
    <View 
    style = {{
      paddingBottom : insets.bottom,
      paddingTop : insets.top,
      backgroundColor: "#f08c4e"
    }}
    >
      <UnSafeScreen/>
    </View>
  )
}

export default index