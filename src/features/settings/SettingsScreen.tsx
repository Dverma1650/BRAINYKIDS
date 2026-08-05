import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function SettingsScreen() {
  const [music, setMusic] = useState(true);
  const [sound, setSound] = useState(true);
  const [haptics, setHaptics] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>🎵 Background Music</Text>
        <Switch value={music} onValueChange={setMusic} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>🔊 Sound Effects</Text>
        <Switch value={sound} onValueChange={setSound} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>📳 Haptic Feedback</Text>
        <Switch value={haptics} onValueChange={setHaptics} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FF",
    padding: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 40,
  },

  row: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
  },
});
