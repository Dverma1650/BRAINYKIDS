import { StyleSheet, View } from "react-native";

import StatItem from "./StatItem";

type Props = {
  score: number;
  lives: number;
  timer: number;
};

export default function StatsBar({ score, lives, timer }: Props) {
  return (
    <View style={styles.container}>
      <StatItem icon="⭐" value={score} label="Score" />

      <View style={styles.divider} />

      <StatItem icon="❤️" value={lives} label="Lives" />

      <View style={styles.divider} />

      <StatItem icon="⏰" value={`${timer}s`} label="Time" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 24,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
  },

  divider: {
    width: 1,
    height: 45,
    backgroundColor: "#E5E7EB",
  },
});
