import { StyleSheet, View } from "react-native";

import StatsBar from "./StatsBar";
import TopBar from "./TopBar";

type Props = {
  coins: number;
  score: number;
  lives: number;
  timer: number;
  onPause: () => void;
};

export default function GameHeader({
  coins,
  score,
  lives,
  timer,
  onPause,
}: Props) {
  return (
    <View style={styles.container}>
      <TopBar coins={coins} onPause={onPause} />

      <StatsBar score={score} lives={lives} timer={timer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 12,
  },
});
