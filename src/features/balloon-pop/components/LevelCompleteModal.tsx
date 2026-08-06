import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  visible: boolean;
  level: number;
  coins: number;
  onContinue: () => void;
};

export default function LevelCompleteModal({
  visible,
  level,
  coins,
  onContinue,
}: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.star}>⭐ ⭐ ⭐</Text>

          <Text style={styles.title}>LEVEL {level}</Text>

          <Text style={styles.subtitle}>Complete!</Text>

          <Text style={styles.reward}>🪙 +{coins} Coins</Text>

          <TouchableOpacity style={styles.button} onPress={onContinue}>
            <Text style={styles.buttonText}>Continue →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 300,
    backgroundColor: "#FFF",
    borderRadius: 30,
    padding: 28,
    alignItems: "center",
  },

  star: {
    fontSize: 34,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#4338CA",
  },

  subtitle: {
    fontSize: 22,
    marginTop: 6,
    color: "#374151",
  },

  reward: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: "700",
    color: "#F59E0B",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#6366F1",
    borderRadius: 18,
    paddingHorizontal: 32,
    paddingVertical: 14,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
});
