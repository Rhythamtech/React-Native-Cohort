import  {View,Text,Image, TextInput, } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



function UnSafeScreen(){
  return <View>
    <Text numberOfLines={5}> Hello Ji</Text>
      <Image source={require("@/assets/images/icon.png")}
           style = {{
            height : 100,
            width : 100,
           }}
           blurRadius={10}/>
           <TextInput placeholder='Enter your Name here' 
            style = {{
              borderWidth : 1,
              borderColor:"#e7680d",
              margin : 12,
              borderRadius : 30,
              fontSize : 16
            }}/>
    
  </View>
}

function SafeScreen(){
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
  return (
    // <UnSafeScreen/>
    <SafeAreaView 
    edges={["bottom","top"]}
    style = {{
      backgroundColor: "#f08c4e"
    }}
    >
      <SafeScreen/>
    </SafeAreaView>
  )
}

export default index