import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../theme";
import Card from "./Card";

type Props = {
  emoji: string;
  title: string;
  subtitle: string;
};

export default function GameCard({ emoji, title, subtitle }: Props) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.emoji}>{emoji}</Text>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subtitle}>{subtitle}</Text>

          <Text style={styles.meta}>⭐ Easy • 👶 Kids</Text>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/games/balloon-pop")}
          >
            <Text style={styles.buttonText}>▶ Play</Text>
          </Pressable>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    fontSize: 56,
    marginRight: 20,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    color: Colors.text,
  },

  subtitle: {
    marginTop: 4,
    color: Colors.textSecondary,
  },

  meta: {
    marginTop: 8,
    color: "#F59E0B",
    fontWeight: "600",
  },

  button: {
    marginTop: 16,
    alignSelf: "flex-start",
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
