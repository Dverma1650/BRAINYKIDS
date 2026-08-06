import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  onPress: () => void;
};

export default function PauseButton({ onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>⏸</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  icon: {
    fontSize: 22,
  },
});
