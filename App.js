import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const showAlert = () => {
    alert("Hi im an alert");
  };

  return (
    <ScrollView style={styles.container}>
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
        <Image
          source={{
            uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
          style={styles.img}
        />
        <Image
          style={styles.img}
          source={require("/Users/vins/Documents/konexio/react/test/assets/star-gd71baaab0_640.jpg")}
        />

        <Pressable style={styles.ton} onPress={showAlert}>
          Boutton
        </Pressable>
        <ActivityIndicator color="white" />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
  },
  main: {
    backgroundColor: "grey",
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
  img: {
    width: 300,
    height: 100,
  },
  ton: {
    backgroundColor: "grey",
  },
});
