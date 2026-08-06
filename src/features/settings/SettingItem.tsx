import { StyleSheet, Switch, Text, View } from "react-native";

type Props = {
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export default function SettingItem({ title, value, onValueChange }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>

      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#fff",

    padding: 18,

    borderRadius: 18,

    marginBottom: 14,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
