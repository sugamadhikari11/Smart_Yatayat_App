import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Login_User = () => {
  const [agree, setAgree] = useState(false);
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Smart Yatayat Login</Text>
      <Image style={styles.logo} source={require('./logo.png')} resizeMode="contain"/>
      <Text style={styles.alignCenter}>Begin your journey here and now!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Name</Text>
        <TextInput style={styles.inputStyle} autoComplete="none" autoCorrect={false}></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Password</Text>
        <TextInput style={styles.inputStyle} autoComplete="none" autoCorrect={false} secureTextEntry={true}></TextInput>
      </View>

      <View style={styles.checkWrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.checkText}>I have read and agree with terms and conditions.</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <Text style={styles.alignCenter}> Don't have an acccount? Signup here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 45,
    backgroundColor: "#fff",
  },
  logo: {
    width: 400,
    paddingLeft:"80%",
    height: 100,
    alignSelf: "center",
  },
  alignCenter:{
    textAlign: "center",
  },
  heading: {
    fontSize: 30,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 50,
    textAlign: "center",
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,
  },
  checkWrapper: {
    paddingTop: 20,
  },
  buttonStyle: {
    marginTop: 30,
    backgroundColor: "#344055",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default Login_User;