import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedSun() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  return <Animated.View style={[styles.sun, animatedStyle]} />;
}

const styles = StyleSheet.create({
  sun: {
    position: "absolute",

    top: 40,
    right: 30,

    width: 90,
    height: 90,

    borderRadius: 45,

    backgroundColor: "#FFD54F",

    shadowColor: "#FFD54F",
    shadowOpacity: 0.8,
    shadowRadius: 25,

    elevation: 12,
  },
});
