import { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { BalloonType } from "../types";
import BalloonRenderer from "./BalloonRenderer";
type Props = {
  x: number;
  y: number;
  type: BalloonType;
  color: string;
  onPress: () => void;
};

export default function Balloon({ x, y, type, color, onPress }: Props) {
  const [visible, setVisible] = useState(true);

  const sway = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const rotation = useSharedValue(0);

  useEffect(() => {
    // Gentle left-right sway
    sway.value = withRepeat(
      withSequence(
        withTiming(-8, { duration: 900 }),
        withTiming(8, { duration: 900 })
      ),
      -1,
      true
    );

    // Gentle breathing animation
    scale.value = withRepeat(
      withSequence(
        withTiming(1.03, { duration: 800 }),
        withTiming(0.98, { duration: 800 })
      ),
      -1,
      true
    );
  }, []);

  const popBalloon = () => {
    // Stop idle animation
    sway.value = 0;

    // Pop animation
    scale.value = withSequence(
      withTiming(1.25, { duration: 80 }),
      withTiming(0, { duration: 150 })
    );

    rotation.value = withTiming(20, { duration: 200 });

    opacity.value = withTiming(0, { duration: 200 }, (finished) => {
      if (finished) {
        runOnJS(setVisible)(false);
        runOnJS(onPress)();
      }
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateX: sway.value },
      { rotate: `${rotation.value}deg` },
      { scale: scale.value },
    ],
  }));

  if (!visible) return null;
  return (
    <Pressable
      onPress={popBalloon}
      style={[
        styles.container,
        {
          left: x,
          top: y,
        },
      ]}
    >
      <Animated.View style={animatedStyle}>
        <BalloonRenderer type={type} color={color} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
