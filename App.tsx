import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextItem from "./components/TextItem";

export default function App() {
  return (
    <View style={styles.container}>
      <TextItem text="Hello world from React Naitve Web2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
