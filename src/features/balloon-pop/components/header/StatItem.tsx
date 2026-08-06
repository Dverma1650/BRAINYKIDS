import { StyleSheet, Text, View } from "react-native";

type Props = {
  icon: string;
  value: string | number;
  label: string;
};

export default function StatItem({ icon, value, label }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },

  icon: {
    fontSize: 22,
  },

  value: {
    fontWeight: "700",

    fontSize: 22,

    color: "#111827",

    marginTop: 2,
  },

  label: {
    color: "#6B7280",

    marginTop: 2,

    fontSize: 12,
  },
});
