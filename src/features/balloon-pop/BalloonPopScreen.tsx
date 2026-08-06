import Grass from "@/components/background/Grass";
import Hills from "@/components/background/Hills";
import MovingCloud from "@/components/background/MovingCloud";
import SoundManager from "@/services/audio/SoundManager";
import GameStorage from "@/services/storage/GameStorage";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import BalloonField from "./components/BalloonField";
import Burst from "./components/Burst";
import FloatingScore from "./components/FloatingScore";
import GameOverModal from "./components/GameOverModal";
import GameHeader from "./components/header/GameHeader";
import LevelCompleteModal from "./components/LevelCompleteModal";
import PauseModal from "./components/PauseModal";
import TargetCard from "./components/TargetCard";
import useBalloonGame from "./hooks/useBalloonGame";

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
    paused,
    setPaused,
    levelComplete,
    continueToNextLevel,
  } = useBalloonGame();
  const [bestScore, setBestScore] = useState(0);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    async function initializeGame() {
      const [coins, bestScore] = await Promise.all([
        GameStorage.getCoins(),
        GameStorage.getHighScore(),
      ]);

      setCoins(coins);
      setBestScore(bestScore);

      SoundManager.playBackground();
    }

    initializeGame();

    return () => {
      SoundManager.stopBackground();
    };
  }, []);

  return (
    <LinearGradient colors={["#8FD3FE", "#FFFFFF"]} style={styles.container}>
      {/* Background */}
      {/* <AnimatedSun /> */}
      <MovingCloud top={400} duration={22000} />
      <MovingCloud top={350} duration={34000} size={0.5} />
      <MovingCloud top={200} duration={28000} size={0.8} />
      <MovingCloud top={350} duration={34000} size={1.2} />
      <Hills />
      <Grass />
      {/* Header */}
      <GameHeader
        coins={coins}
        score={score}
        lives={lives}
        timer={timer}
        onPause={() => setPaused(true)}
      />
      {/* Mission */}
      <View style={styles.targetWrapper}>
        <TargetCard target={targetColor} />
      </View>
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
      <PauseModal
        visible={paused}
        onResume={() => setPaused(false)}
        onRestart={() => {
          setPaused(false);
          restartGame();
        }}
        onHome={() => router.replace("/")}
      />
      <LevelCompleteModal
        visible={levelComplete}
        level={level}
        coins={20}
        onContinue={async () => {
          await continueToNextLevel();
          setCoins(await GameStorage.getCoins());
        }}
      />
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
  topBar: {
    marginTop: 16,
    marginHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  targetWrapper: {
    marginTop: 16,
    alignItems: "center",
  },
});
