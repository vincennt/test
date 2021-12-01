import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text1}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={styles.text2}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={styles.text3}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
  },
  main: {
    backgroundColor: "white",
  },
  text2: {
    margin: 80,
    textAlign: "center",
  },
  text1: {
    fontSize: 30,
    margin: 80,
  },
  text3: {
    margin: 80,
    fontWeight: "900",
  },
});
