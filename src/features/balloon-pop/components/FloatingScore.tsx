import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  x: number;
  y: number;
  value: number | string;
  onFinish: () => void;
};

export default function FloatingScore({ x, y, value, onFinish }: Props) {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    translateY.value = withTiming(-60, { duration: 800 });

    opacity.value = withTiming(0, { duration: 800 }, (finished) => {
      if (finished) {
        onFinish();
      }
    });
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const displayValue = typeof value === "number" ? `+${value}` : value;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          left: x,
          top: y,
        },
        style,
      ]}
    >
      <Text style={styles.text}>{displayValue}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },

  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "#000",
    textShadowRadius: 6,
  },
});
