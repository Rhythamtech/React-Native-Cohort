import { Background } from '@react-navigation/elements';
import { useState } from 'react';
import  {View,Text,Image, TextInput, Pressable} from 'react-native';


export default function HomeScreen(){
  const [name,setName] = useState("");
  return (
    <View>
       <Text numberOfLines={5}> Hello Ji</Text>
       <Image source={require("@/assets/images/icon.png")}
       style = {{
        height : 100,
        width : 100,
       }}
       blurRadius={10}/>
       <TextInput placeholder='Enter your Name here' 
        value = {name}
        onChangeText={setName}
        style = {{
          borderWidth : 1,
          borderColor:"#e7680d",
          margin : 12,
          borderRadius : 30,
          fontSize : 16
        }}/>

        <Pressable 
        onPress={()=> alert("Dorbara Dabaiye na")}
          style = {({pressed} )=>(({
              backgroundColor : pressed ? "#19b72b00":"#dd4646" 
            }))}>
          <Text> Press karo na</Text>
        </Pressable>

        <Text>{name}</Text>
    </View>
    
  );
  
}