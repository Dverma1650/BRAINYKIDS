import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants";
import { BalloonColor } from "../types";
import BalloonSVG from "./BalloonSVG";

type Props = {
  target: BalloonColor;
};

export default function TargetCard({ target }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🎯 Mission</Text>

        <Text style={styles.subtitle}>Pop this balloon</Text>

        <BalloonSVG color={COLORS[target].hex} width={65} height={90} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 10,
  },

  card: {
    width: 220,
    paddingVertical: 14,

    borderRadius: 28,

    backgroundColor: "rgba(255,255,255,0.88)",

    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,

    elevation: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#555",
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 6,

    fontSize: 15,

    color: "#777",
  },
});
