import { Text, View, StyleSheet, Image, TextInput, Pressable } from "react-native";
import { useState } from "react";


export default function Index() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Sign In </Text>
      <Text style={{ marginVertical: 20, marginHorizontal: 20 }}>Let's experience the joy of telecare Al</Text>

      <TextInput
        placeholder="Username or Phone Number"
        value={userName}
        onChangeText={setUserName}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          paddingVertical: 10,
          borderRadius: 30,
          marginVertical: 10,
          paddingHorizontal: 20,
          borderColor: "gray",
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        //secureTextEntry={true}
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          paddingVertical: 10,
          borderRadius: 30,
          marginVertical: 10,
          paddingHorizontal: 20,
          borderColor: "gray",
        }}
      />

      <Pressable
        style={{
          width: 300,
          height: 50,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "hsla(100, 81%, 57%, 1.00)"
        }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>Login</Text>
      </Pressable>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Pressable style={{ width: 50, height: 50, marginHorizontal: 10, alignItems: "center", justifyContent: "center" }}>
          <Image source={require("@/assets/images/google.png")}
            style={{
              width: 60,
              height: 60,
            }} />
        </Pressable>
        <Pressable style={{ width: 50, height: 50, marginHorizontal: 10, alignItems: "center", justifyContent: "center" }}>
          <Image source={require("@/assets/images/instagram.png")}
            style={{
              width: 60,
              height: 60,
            }} />
        </Pressable>

      </View>
      <Text style={{ marginVertical: 20 }}>don't have an account? <Text style={{ color: "hsla(100, 81%, 57%, 1.00)" }} onPress={() => { }}>Sign up</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingTop: 50,
  },
});
