import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from "react-native";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/craft.png")} />
          <Text style={styles.text}>Craftmen</Text>
        </View>

        <View>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    width: 300,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  text: {
    color: "#FFF",
    marginTop: 10,
    width: 150,
    textAlign: "center",
    opacity: 0.9
  }
});
