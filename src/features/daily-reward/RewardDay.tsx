import { StyleSheet, Text, View } from "react-native";

type Props = {
  day: number;
  coins: number;
  claimed: boolean;
  today: boolean;
};

export default function RewardDay({ day, coins, claimed, today }: Props) {
  return (
    <View
      style={[styles.card, today && styles.today, claimed && styles.claimed]}
    >
      <Text style={styles.day}>Day {day}</Text>

      <Text style={styles.coin}>🪙 {coins}</Text>

      {claimed && <Text style={styles.done}>✓</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 110,
    borderRadius: 20,
    backgroundColor: "#fff",
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  today: {
    borderWidth: 3,
    borderColor: "#F59E0B",
  },

  claimed: {
    backgroundColor: "#DCFCE7",
  },

  day: {
    fontWeight: "700",
    fontSize: 16,
  },

  coin: {
    marginTop: 10,
    fontSize: 22,
  },

  done: {
    marginTop: 8,
    color: "green",
    fontWeight: "700",
  },
});
