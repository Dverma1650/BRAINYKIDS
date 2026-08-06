import { StyleSheet, Text, View } from "react-native";

type Props = {
  coins: number;
};

export default function CoinCard({ coins }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🪙 {coins}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 30,
    elevation: 5,
  },

  text: {
    fontSize: 22,
    fontWeight: "700",
  },
});
