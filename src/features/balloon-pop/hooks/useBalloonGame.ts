import SoundManager from "@/services/audio/SoundManager";
import HapticManager from "@/services/haptics/HapticManager";
import GameStorage from "@/services/storage/GameStorage";
import { useEffect, useMemo, useState } from "react";
import { LEVELS } from "../config/level";
import { INITIAL_LIVES } from "../constants";
import { BalloonColor, BalloonItem } from "../types";
import { createBalloon } from "../utils/balloonGenerator";
import { getPowerBalloonReward } from "../utils/powerBalloonHandler";
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
  const [combo, setCombo] = useState(1);
  const [lastPopTime, setLastPopTime] = useState(0);
  const COMBO_WINDOW = 1000; // 1 second
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

  // Balloon Movement
  useEffect(() => {
    if (gameOver || paused || frozen) return;
    const interval = setInterval(() => {
      setBalloons((prev) =>
        prev.map((balloon) => {
          const nextY =
            balloon.y - balloon.speed * currentLevel.speedMultiplier;

          if (nextY < -120) {
            return createBalloon();
          }

          return {
            ...balloon,
            y: nextY,
          };
        })
      );
    }, 16);

    return () => clearInterval(interval);
  }, [gameOver, paused, frozen, currentLevel]);

  // Timer
  useEffect(() => {
    if (gameOver || paused || frozen) return;

    if (timer <= 0) {
      (async () => {
        await GameStorage.saveHighScore(score);
        await GameStorage.saveBestLevel(level);
        await GameStorage.addCoins(Math.floor(score / 10));
      })();

      SoundManager.play("gameOver");
      HapticManager.heavy();

      setGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, gameOver, paused, frozen]);

  // Level Up
  // Level Complete
  useEffect(() => {
    if (levelComplete) return;

    if (level >= LEVELS.length) return;

    if (score >= currentLevel.targetScore) {
      SoundManager.play("levelUp");
      HapticManager.success();

      setFrozen(true);
      setLevelComplete(true);
    }
  }, [score]);

  function popBalloon(balloon: BalloonItem) {
    if (gameOver || paused) return;
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

    // ====================================================
    // POWER BALLOONS
    // ====================================================

    const powerTypes = [
      "star",
      "heart",
      "clock",
      "bomb",
      "gift",
      "magnet",
      "ice",
      "lightning",
    ];

    if (powerTypes.includes(balloon.type)) {
      const reward = getPowerBalloonReward(balloon.type as any);

      if (reward) {
        // Score
        if (reward.score !== 0) {
          setScore((prev) => Math.max(0, prev + reward.score));
        }

        // Lives
        if (reward.lives !== 0) {
          setLives((prev) =>
            Math.min(INITIAL_LIVES, Math.max(0, prev + reward.lives))
          );
        }

        // Timer
        if (reward.timer !== 0) {
          setTimer((prev) => prev + reward.timer);
        }

        // Floating text
        setFloatingScores((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            x: balloon.x,
            y: balloon.y,
            value: reward.floatingText,
          },
        ]);

        // Ice Balloon
        if (balloon.type === "ice") {
          setFrozen(true);

          setTimeout(() => {
            setFrozen(false);
          }, 3000);
        }

        // Magnet Balloon
        if (balloon.type === "magnet") {
          setBalloons((prev) =>
            prev.map((b) => ({
              ...b,
              x: b.x + (180 - b.x) * 0.35,
            }))
          );
        }

        SoundManager.play("pop");
        HapticManager.success();

        setBalloons((prev) =>
          prev.map((item) => (item.id === balloon.id ? createBalloon() : item))
        );

        return;
      }
    }

    // ====================================================
    // NORMAL BALLOONS
    // ====================================================

    if (balloon.type === targetColor) {
      SoundManager.play("pop");
      HapticManager.pop();

      const now = Date.now();

      let currentCombo = 1;

      if (now - lastPopTime <= COMBO_WINDOW) {
        currentCombo = combo + 1;
      }

      setCombo(currentCombo);
      setLastPopTime(now);

      const earned = currentCombo * 10;

      setScore((prev) => prev + earned);

      setFloatingScores((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: balloon.x,
          y: balloon.y,
          value:
            currentCombo > 1 ? `🔥 x${currentCombo} +${earned}` : `+${earned}`,
        },
      ]);

      const random = COLORS[Math.floor(Math.random() * COLORS.length)];

      setTargetColor(random);
    } else {
      SoundManager.play("wrong");
      HapticManager.error();

      setCombo(1);

      setFloatingScores((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: balloon.x,
          y: balloon.y,
          value: "-1 ❤️",
        },
      ]);

      setLives((prev) => {
        const nextLives = prev - 1;

        if (nextLives <= 0) {
          (async () => {
            await GameStorage.saveHighScore(score);
            await GameStorage.saveBestLevel(level);
            await GameStorage.addCoins(Math.floor(score / 10));
          })();

          SoundManager.play("gameOver");
          HapticManager.heavy();

          setGameOver(true);

          return 0;
        }

        return nextLives;
      });
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
    setCombo(1);
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
    setCombo(1);
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
