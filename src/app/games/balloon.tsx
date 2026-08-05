import { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  x: number;
  onPress: () => void;
};

export default function Balloon({ x, onPress }: Props) {
  const translateY = useSharedValue(700);

  useEffect(() => {
    translateY.value = withTiming(-150, {
      duration: 5000,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
    left: x,
  }));

  return (
    <Animated.View style={[styles.balloon, animatedStyle]}>
      <Pressable onPress={onPress}>
        <Text style={styles.icon}>🎈</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  balloon: {
    position: "absolute",
    bottom: 0,
  },
  icon: {
    fontSize: 70,
  },
});
