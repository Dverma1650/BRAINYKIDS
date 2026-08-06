import { useEffect } from "react";

type Props = {
  timer: number;
  paused: boolean;
  frozen: boolean;
  gameOver: boolean;

  setTimer: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
};

export default function useGameTimer({
  timer,
  paused,
  frozen,
  gameOver,
  setTimer,
  onTimeUp,
}: Props) {
  useEffect(() => {
    if (gameOver) return;

    if (paused) return;

    if (frozen) return;

    if (timer <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, paused, frozen, gameOver]);
}
