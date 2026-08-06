import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  visible: boolean;
  onResume: () => void;
  onRestart: () => void;
  onHome: () => void;
};

export default function PauseModal({
  visible,
  onResume,
  onRestart,
  onHome,
}: Props) {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>⏸ Game Paused</Text>

          <TouchableOpacity style={styles.button} onPress={onResume}>
            <Text style={styles.buttonText}>▶ Resume</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onRestart}>
            <Text style={styles.buttonText}>🔄 Restart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onHome}>
            <Text style={styles.buttonText}>🏠 Home</Text>
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
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 25,
    color: "#1F2937",
  },

  button: {
    width: "100%",
    backgroundColor: "#6366F1",
    paddingVertical: 15,
    borderRadius: 18,
    marginVertical: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
});
