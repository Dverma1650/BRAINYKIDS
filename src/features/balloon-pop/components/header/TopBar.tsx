import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ShopButton from "./ShopButton";

type Props = {
  coins: number;
  onPause: () => void;
};

export default function TopBar({ coins, onPause }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.coinCard}>
        <Text style={styles.coin}>🪙 {coins}</Text>
      </View>
      <TouchableOpacity style={styles.pauseButton} onPress={onPause}>
        <Text style={styles.pause}>⏸</Text>
      </TouchableOpacity>
      <View style={styles.right}>
        <ShopButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 12,
    paddingTop: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  coinCard: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
    elevation: 6,
  },

  coin: {
    fontSize: 22,
    fontWeight: "800",
  },

  pauseButton: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: "#fff",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,

    elevation: 6,
  },

  pause: {
    fontSize: 22,
  },
});
