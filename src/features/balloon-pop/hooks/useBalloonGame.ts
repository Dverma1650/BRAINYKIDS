import SoundManager from "@/services/audio/SoundManager";
import HapticManager from "@/services/haptics/HapticManager";
import SpeechService from "@/services/speech/SpeechService";
import GameStorage from "@/services/storage/GameStorage";
import { useEffect, useMemo, useState } from "react";
import { LEVELS } from "../config/level";
import { INITIAL_LIVES } from "../constants";
import { BalloonColor, BalloonItem } from "../types";
import { createBalloon } from "../utils/balloonGenerator";
import useBalloonMovement from "./useBalloonMovement";
import useGameTimer from "./useGameTimer";
import useLevel from "./useLevel";
import { usePowerBalloon } from "./usePowerBalloon";
import useScore from "./useScore";

type Burst = {
  id: number;
  x: number;
  y: number;
  color: string;
};

type FloatingScore = {
  id: number;
  x: number;
  y: number;
  value: string;
};

const COLORS: BalloonColor[] = ["red", "green", "blue", "yellow"];

function createInitialBalloons(count: number): BalloonItem[] {
  const balloons: BalloonItem[] = [];

  for (let i = 0; i < count; i++) {
    balloons.push(createBalloon(COLORS[i % COLORS.length]));
  }

  return balloons;
}

export default function useBalloonGame() {
  const [paused, setPaused] = useState(false); // User pause
  const [frozen, setFrozen] = useState(false); // Ice power-up
  const [levelComplete, setLevelComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [gameOver, setGameOver] = useState(false);
  const currentLevel = useMemo(
    () => LEVELS[Math.min(level - 1, LEVELS.length - 1)],
    [level]
  );
  const [timer, setTimer] = useState(currentLevel.time);
  const [targetColor, setTargetColor] = useState<BalloonColor>("red");
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [floatingScores, setFloatingScores] = useState<FloatingScore[]>([]);
  const [balloons, setBalloons] = useState<BalloonItem[]>(
    createInitialBalloons(currentLevel.balloons)
  );

  useEffect(() => {
    if (paused || gameOver || levelComplete) return;

    SpeechService.speakTarget(targetColor);
  }, [targetColor]);

  const { combo, calculateScore, resetCombo, setCombo, setLastPopTime } =
    useScore();
  useBalloonMovement({
    speedMultiplier: currentLevel.speedMultiplier,
    paused,
    frozen,
    gameOver,
    balloons,
    setBalloons,
  });

  useGameTimer({
    timer,
    paused,
    frozen,
    gameOver,
    setTimer,
    onTimeUp: async () => {
      await GameStorage.saveHighScore(score);
      await GameStorage.saveBestLevel(level);
      await GameStorage.addCoins(Math.floor(score / 10));

      const enabled = await GameStorage.getSoundEnabled();

      if (enabled) {
        SoundManager.play("gameOver");
      }

      HapticManager.heavy();

      setGameOver(true);
    },
  });

  useLevel({
    score,
    targetScore: currentLevel.targetScore,
    levelComplete,
    maxLevel: level >= LEVELS.length,
    setFrozen,
    setLevelComplete,
  });

  async function popBalloon(balloon: BalloonItem) {
    if (gameOver || paused || frozen) return;
    // Burst animation
    setBursts((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x: balloon.x + 25,
        y: balloon.y + 30,
        color: balloon.color,
      },
    ]);

    const handled = await usePowerBalloon({
      balloon,
      setScore,
      setLives,
      setTimer,
      setFrozen,
      setFloatingScores,
      setBalloons,
    });

    if (handled) {
      const enabled = await GameStorage.getSoundEnabled();

      if (enabled) {
        SoundManager.play("pop");
        SpeechService.speakCorrect();
      }

      HapticManager.success();

      return;
    }

    // NORMAL BALLOONS
    if (balloon.type === targetColor) {
      const soundEnabled = await GameStorage.getSoundEnabled();
      if (soundEnabled) {
        SoundManager.play("pop");
        SpeechService.speakCorrect();
      }
      HapticManager.pop();
      const earned = calculateScore();
      setScore((prev) => prev + earned);
      setFloatingScores((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: balloon.x,
          y: balloon.y,
          value: combo > 1 ? `🔥 x${combo} +${earned}` : `+${earned}`,
        },
      ]);
      const random = COLORS[Math.floor(Math.random() * COLORS.length)];
      setTargetColor(random);
    } else {
      const soundEnabled = await GameStorage.getSoundEnabled();

      if (soundEnabled) {
        SoundManager.play("wrong");
        SpeechService.speakWrong(targetColor);
      }
      HapticManager.error();
      resetCombo();
      setFloatingScores((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: balloon.x,
          y: balloon.y,
          value: "-1 ❤️",
        },
      ]);

      const nextLives = lives - 1;

      if (nextLives <= 0) {
        setLives(0);

        await GameStorage.saveHighScore(score);
        await GameStorage.saveBestLevel(level);
        await GameStorage.addCoins(Math.floor(score / 10));

        const soundEnabled = await GameStorage.getSoundEnabled();

        if (soundEnabled) {
          SoundManager.play("gameOver");
        }
        SpeechService.speakGameOver();

        HapticManager.heavy();
        setGameOver(true);
      } else {
        setLives(nextLives);
      }
    }

    setBalloons((prev) =>
      prev.map((item) => (item.id === balloon.id ? createBalloon() : item))
    );
  }

  function restartGame() {
    setScore(0);
    setLevel(1);
    setLives(INITIAL_LIVES);
    setGameOver(false);
    setPaused(false);
    setLevelComplete(false);
    resetCombo();
    setLastPopTime(0);
    setTargetColor("red");
    setTimer(LEVELS[0].time);
    setBursts([]);
    setFloatingScores([]);
    setBalloons(createInitialBalloons(LEVELS[0].balloons));
  }
  async function continueToNextLevel() {
    const nextLevel = level + 1;
    if (nextLevel > LEVELS.length) {
      setPaused(false);
      setGameOver(true);
      return;
    }
    await GameStorage.addCoins(20);
    const config = LEVELS[nextLevel - 1];
    setLevel(nextLevel);
    setTimer(config.time);
    setTargetColor("red");
    resetCombo();
    setLastPopTime(0);
    setBalloons(createInitialBalloons(config.balloons));
    setFrozen(false);
    setLevelComplete(false);
  }

  return {
    balloons,
    score,
    level,
    lives,
    timer,
    targetColor,
    gameOver,
    popBalloon,
    restartGame,
    bursts,
    setBursts,
    floatingScores,
    setFloatingScores,
    combo,
    paused,
    setPaused,
    levelComplete,
    continueToNextLevel,
    frozen,
    setFrozen,
  };
}
