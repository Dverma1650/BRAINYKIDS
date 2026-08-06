import Card from "@/components/ui/Card";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants";
import { BalloonColor } from "../types";
import FloatingBalloon from "./FloatingBalloon";

type Props = {
  target: BalloonColor;
};

export default function TargetCard({ target }: Props) {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.icon}>🎯</Text>

        <Text style={styles.title}>Mission</Text>
      </View>

      <Text style={styles.subtitle}>Pop the</Text>

      <Text
        style={[
          styles.targetText,
          {
            color: COLORS[target].hex,
          },
        ]}
      >
        {COLORS[target].label.toUpperCase()} BALLOON
      </Text>

      <View style={styles.balloon}>
        <FloatingBalloon type={target} color={COLORS[target].hex} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    alignSelf: "center",
    marginTop: 10,

    paddingVertical: 16,
    paddingHorizontal: 18,

    borderRadius: 24,

    backgroundColor: "rgba(255,255,255,0.92)",

    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 8,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  icon: {
    fontSize: 20,
    marginRight: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2F3A4F",
  },

  subtitle: {
    fontSize: 16,
    color: "#7A8597",
    marginTop: 2,
  },

  targetText: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: "700",
  },

  balloon: {
    marginTop: -4,

    transform: [
      {
        scale: 0.68,
      },
    ],
  },
});
