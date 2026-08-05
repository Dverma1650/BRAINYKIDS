import { StyleSheet, Text } from "react-native";

export default function Sun() {
  return <Text style={styles.sun}>☀️</Text>;
}

const styles = StyleSheet.create({
  sun: {
    position: "absolute",
    right: 20,
    top: 70,
    fontSize: 55,
  },
});
