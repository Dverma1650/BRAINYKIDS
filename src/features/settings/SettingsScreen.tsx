import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SettingItem from "./SettingItem";

export default function SettingsScreen() {
  const [music, setMusic] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      <SettingItem title="Music" value={music} onValueChange={setMusic} />

      <SettingItem
        title="Sound Effects"
        value={sound}
        onValueChange={setSound}
      />

      <SettingItem
        title="Vibration"
        value={vibration}
        onValueChange={setVibration}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 30,
  },
});
