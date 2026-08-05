import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  x: number;
  y: number;
  color: string;
  onPress: () => void;
};

export default function Balloon({ x, y, color, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          left: x,
          top: y,
        },
      ]}
    >
      {/* Balloon */}
      <View
        style={[
          styles.balloon,
          {
            backgroundColor: color,
          },
        ]}
      >
        {/* Shine */}
        <View style={styles.shine} />
      </View>

      {/* Knot */}
      <View
        style={[
          styles.knot,
          {
            borderTopColor: color,
          },
        ]}
      />

      {/* String */}
      <View style={styles.string} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
  },

  balloon: {
    width: 70,
    height: 90,
    borderRadius: 40,
    justifyContent: "flex-start",
    alignItems: "flex-start",

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 6,
  },

  shine: {
    width: 18,
    height: 35,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.45)",
    marginLeft: 12,
    marginTop: 12,
    transform: [{ rotate: "-20deg" }],
  },

  knot: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },

  string: {
    width: 2,
    height: 40,
    backgroundColor: "#555",
  },
});
