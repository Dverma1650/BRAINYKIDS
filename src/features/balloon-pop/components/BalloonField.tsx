import { StyleSheet, View } from "react-native";
import { BalloonItem } from "../types";
import Balloon from "./Balloon";

type Props = {
  balloons: BalloonItem[];
  onBalloonPress: (balloon: BalloonItem) => void;
};

export default function BalloonField({ balloons, onBalloonPress }: Props) {
  return (
    <View style={styles.container}>
      {balloons.map((balloon) => (
        <Balloon
          key={balloon.id}
          x={balloon.x}
          y={balloon.y}
          type={balloon.type}
          onPress={() => onBalloonPress(balloon)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
