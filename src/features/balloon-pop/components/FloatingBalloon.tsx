import { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { BalloonType } from "../types";
import BalloonRenderer from "./BalloonRenderer";

type Props = {
  type: BalloonType;
  color: string;
};

export default function FloatingBalloon({ type, color }: Props) {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -8,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
      }}
    >
      <BalloonRenderer type={type} color={color} />
    </Animated.View>
  );
}
