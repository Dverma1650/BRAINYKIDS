import { useEffect } from "react";
import { BalloonColor, BalloonItem } from "../types";
import { createBalloon } from "../utils/balloonGenerator";

type Props = {
  balloons: BalloonItem[];
  speedMultiplier: number;
  paused: boolean;
  frozen: boolean;
  gameOver: boolean;
  availableColors: BalloonColor[];
  setBalloons: React.Dispatch<React.SetStateAction<BalloonItem[]>>;
};

export default function useBalloonMovement({
  speedMultiplier,
  paused,
  frozen,
  gameOver,
  availableColors,
  setBalloons,
}: Props) {
  useEffect(() => {
    if (paused) return;

    if (frozen) return;

    if (gameOver) return;

    const interval = setInterval(() => {
      setBalloons((prev) =>
        prev.map((balloon) => {
          const nextY = balloon.y - balloon.speed * speedMultiplier;

          if (nextY < -120) {
            const randomColor =
              availableColors[
                Math.floor(Math.random() * availableColors.length)
              ];

            return createBalloon(randomColor);
          }

          return {
            ...balloon,
            y: nextY,
          };
        })
      );
    }, 16);

    return () => clearInterval(interval);
  }, [paused, frozen, gameOver, speedMultiplier]);
}
