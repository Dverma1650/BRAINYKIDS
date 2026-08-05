import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../theme";
import Card from "./Card";

export default function StatsCard() {
  return (
    <Card>
      <View style={styles.row}>
        <View>
          <Text style={styles.number}>⭐ 120</Text>
          <Text style={styles.label}>Stars</Text>
        </View>

        <View>
          <Text style={styles.number}>🔥 7</Text>
          <Text style={styles.label}>Day Streak</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  number: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
  },

  label: {
    color: Colors.textSecondary,
    marginTop: 6,
  },
});
