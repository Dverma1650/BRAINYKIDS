import { StyleSheet, Text, View } from "react-native";

type Props = {
  score: number;
  lives: number;
  timer: number;
  level: number;
};

export default function GameHeader({ score, lives, timer }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>⭐</Text>
        <Text style={styles.label}>Score</Text>
        <Text style={styles.value}>{score}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>❤️</Text>
        <Text style={styles.label}>Lives</Text>
        <Text style={styles.value}>{lives}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>⏱</Text>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{timer}s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 55,
    paddingBottom: 12,
  },

  card: {
    backgroundColor: "#FFF",
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 12,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  icon: {
    fontSize: 24,
  },

  label: {
    color: "#777",
    marginTop: 4,
    fontSize: 13,
  },

  value: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 6,
  },
});
