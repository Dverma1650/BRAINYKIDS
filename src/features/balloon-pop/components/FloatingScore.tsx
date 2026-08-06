import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  runOnJS,
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
        // Use runOnJS to call the onFinish function on the JS thread
        runOnJS(onFinish)();
      }
    });
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));
  const displayValue = typeof value === "number" ? `+${value}` : value;

  return (
    <Animated.Text style={[styles.text, style]}>{displayValue}</Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "bold",
  },
});
