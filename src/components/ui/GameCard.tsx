import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../theme";
import Card from "./Card";

type Props = {
  emoji: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export default function GameCard({ emoji, title, subtitle, onPress }: Props) {
  return (
    <Pressable onPress={() => router.push("/games/balloon-pop")}>
      <Card>
        <Text style={styles.icon}>{emoji}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    color: Colors.text,
  },
  subtitle: {
    marginTop: 6,
    color: Colors.textSecondary,
  },
});
