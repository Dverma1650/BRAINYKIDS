import { StyleSheet, Text, View } from "react-native";

type Props = {
  icon: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  completed: boolean;
};

export default function AchievementCard({
  icon,
  title,
  description,
  progress,
  target,
  completed,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>

        <Text>{description}</Text>

        <Text>
          {progress} / {target}
        </Text>
      </View>

      <Text style={styles.status}>{completed ? "✅" : "🔒"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    margin: 10,
    borderRadius: 16,
    backgroundColor: "#fff",
    elevation: 3,
  },

  icon: {
    fontSize: 36,
    marginRight: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  status: {
    fontSize: 24,
  },
});
