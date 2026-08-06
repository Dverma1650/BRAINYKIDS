import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
  reward: number;
  unlocked: boolean;
};

export default function AchievementCard({
  title,
  description,
  reward,
  unlocked,
}: Props) {
  return (
    <View style={[styles.card, unlocked && styles.unlocked]}>
      <Text style={styles.icon}>{unlocked ? "🏆" : "🔒"}</Text>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>

      <Text style={styles.reward}>🪙 {reward}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 20,
    padding: 16,
    elevation: 3,
  },

  unlocked: {
    backgroundColor: "#DCFCE7",
  },

  icon: {
    fontSize: 34,
    marginRight: 14,
  },

  title: {
    fontWeight: "700",
    fontSize: 18,
  },

  description: {
    color: "#666",
    marginTop: 4,
  },

  reward: {
    fontWeight: "700",
    fontSize: 18,
  },
});
