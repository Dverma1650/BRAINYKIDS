import AnimatedSun from "@/components/background/AnimatedSun";
import Grass from "@/components/background/Grass";
import Hills from "@/components/background/Hills";
import MovingCloud from "@/components/background/MovingCloud";
import SoundManager from "@/services/audio/SoundManager";
import GameStorage from "@/services/storage/GameStorage";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import BalloonField from "./components/BalloonField";
import Burst from "./components/Burst";
import FloatingScore from "./components/FloatingScore";
import GameHeader from "./components/GameHeader";
import TargetCard from "./components/TargetCard";
import useBalloonGame from "./hooks/useBalloonGame";
import GameOverModal from "./components/GameOverModal";

export default function BalloonPopScreen() {
  const {
    score,
    level,
    lives,
    timer,
    balloons,
    targetColor,
    gameOver,
    popBalloon,
    restartGame,
    bursts,
    setBursts,
    floatingScores,
    setFloatingScores,
  } = useBalloonGame();
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    (async () => {
      setBestScore(await GameStorage.getHighScore());
    })();
  }, []);
  useEffect(() => {
    SoundManager.playBackground();
    return () => {
      SoundManager.stopBackground();
    };
  }, []);
  return (
    <LinearGradient colors={["#8FD3FE", "#FFFFFF"]} style={styles.container}>
      {/* Background */}
      <AnimatedSun />
      <MovingCloud top={400} duration={22000} />
      <MovingCloud top={350} duration={34000} size={0.5} />
      <MovingCloud top={200} duration={28000} size={0.8} />
      <MovingCloud top={350} duration={34000} size={1.2} />
      <Hills />
      <Grass />
      {/* Header */}
      <GameHeader score={score} lives={lives} timer={timer} level={level} />
      {/* Mission */}
      <TargetCard target={targetColor} />
      {/* Balloons */}
      <BalloonField balloons={balloons} onBalloonPress={popBalloon} />
      {/* Burst Effect */}
      {bursts.map((burst) => (
        <Burst
          key={burst.id}
          x={burst.x}
          y={burst.y}
          color={burst.color}
          onFinish={() =>
            setBursts((prev) => prev.filter((b) => b.id !== burst.id))
          }
        />
      ))}
      {/* Floating Score */}
      {floatingScores.map((item) => (
        <FloatingScore
          key={item.id}
          x={item.x}
          y={item.y}
          value={item.value}
          onFinish={() =>
            setFloatingScores((prev) => prev.filter((s) => s.id !== item.id))
          }
        />
      ))}
      <GameOverModal
        visible={gameOver}
        score={score}
        bestScore={bestScore}
        coinsEarned={Math.floor(score / 10)}
        onRestart={restartGame}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
