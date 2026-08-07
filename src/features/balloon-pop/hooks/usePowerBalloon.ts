import { LEVELS } from "../config/level";
import { INITIAL_LIVES } from "../constants";
import { BalloonItem } from "../types";
import { createBalloon } from "../utils/balloonGenerator";
import { getPowerBalloonReward } from "../utils/powerBalloonHandler";

type Props = {
  balloon: BalloonItem;

  setScore: React.Dispatch<React.SetStateAction<number>>;
  setLives: React.Dispatch<React.SetStateAction<number>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setFrozen: React.Dispatch<React.SetStateAction<boolean>>;
  setFloatingScores: React.Dispatch<React.SetStateAction<any[]>>;
  setBalloons: React.Dispatch<React.SetStateAction<BalloonItem[]>>;
};

export async function usePowerBalloon({
  balloon,
  setScore,
  setLives,
  setTimer,
  setFrozen,
  setFloatingScores,
  setBalloons,
}: Props) {
  const reward = getPowerBalloonReward(balloon.type as any);

  if (!reward) return false;

  if (reward.score !== 0) {
    setScore((prev) => Math.max(0, prev + reward.score));
  }

  if (reward.lives !== 0) {
    setLives((prev) =>
      Math.min(INITIAL_LIVES, Math.max(0, prev + reward.lives))
    );
  }

  if (reward.timer !== 0) {
    setTimer((prev) => prev + reward.timer);
  }

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

  setBalloons((prev) =>
    prev.map((item) =>
      item.id === balloon.id ? createBalloon(LEVELS[0].level) : item
    )
  );

  return true;
}
