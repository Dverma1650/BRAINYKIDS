import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  visible: boolean;
  score: number;
  bestScore: number;
  coinsEarned: number;
  onRestart: () => void;
};

export default function GameOverModal({
  visible,
  score,
  bestScore,
  coinsEarned,
  onRestart,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>🎉 Game Over</Text>
          <Text style={styles.score}>Final Score: {score}</Text>
          <Text>Best Score: {bestScore}</Text>
          <Text>Coins Earned: +{coinsEarned}</Text>
          <Pressable style={styles.button} onPress={onRestart}>
            <Text style={styles.buttonText}>Play Again</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },

  score: {
    marginTop: 20,
    fontSize: 22,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#2563EB",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
