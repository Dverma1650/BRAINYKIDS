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
  color: string;
  onFinish: () => void;
};

export default function Burst({
  x,
  y,
  color,
  onFinish,
}: Props) {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    scale.value = withTiming(2.5, { duration: 350 });

    opacity.value = withTiming(0, { duration: 350 }, (finished) => {
      if (finished) {
        runOnJS(onFinish)();
      }
    });
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.circle,
        style,
        {
          left: x,
          top: y,
          backgroundColor: color,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});