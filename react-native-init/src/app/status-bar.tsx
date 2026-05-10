
import  {View,Text,Image, TextInput, StatusBar, } from 'react-native';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

//  Async way to get Metrics

function UnSafeScreen(){
  return <View>
     <Text style={{ color: "#0000", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#00ff", padding: 16 }}>
        This content might be hidden behin d the status bar in dark mode.
      </Text>
  </View>
}


const index = () => {

  const insets = useSafeAreaInsets();
  return (
    <View 
    style = {{
      flex : 1,
      paddingBottom : insets.bottom,
      paddingTop : insets.top,
      backgroundColor: "#6dc1f8"
    }}
    >
      <StatusBar barStyle={"dark-content"}/>
      <UnSafeScreen/>
    </View>
  )
}

export default index