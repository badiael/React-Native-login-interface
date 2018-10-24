import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
          returnKeyType="next"
        />

        <TextInput
          placeholder="password"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
          returnKeyType="go"
        />

        <TouchableOpacity
          onPress={() => console.log("puff")}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    width: 300,
    backgroundColor: "#16a085",
    paddingVertical: 10,
    borderRadius: 25
  },
  buttonText: {
    width: 300,
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  }
});
