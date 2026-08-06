import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export default function ShopButton() {
  return (
    <Pressable style={styles.button} onPress={() => router.push("/shop")}>
      <Text style={styles.icon}>🛍</Text>
      <Text style={styles.text}>Shop</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFD54F",

    paddingHorizontal: 16,
    paddingVertical: 10,

    borderRadius: 22,

    elevation: 6,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  icon: {
    fontSize: 20,
    marginRight: 6,
  },

  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
});
