import { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import CloudSVG from "./CloudSVG";
const { width } = Dimensions.get("window");

type Props = {
  top: number;
  size?: number;
  duration?: number;
};

export default function MovingCloud({
  top,
  size = 1,
  duration = 25000,
}: Props) {
  const translateX = useSharedValue(-200);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(width + 200, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        scale: size,
      },
    ],
  }));
  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        {
          top,
        },
      ]}
    >
      <CloudSVG />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
