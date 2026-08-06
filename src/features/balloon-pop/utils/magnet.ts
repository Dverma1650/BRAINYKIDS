import { BalloonColor, BalloonItem } from "../types";

/**
 * Returns all balloons matching the current target color.
 */
export function getTargetBalloons(
  balloons: BalloonItem[],
  targetColor: BalloonColor
): BalloonItem[] {
  return balloons.filter(
    (balloon) => !balloon.popped && balloon.type === targetColor
  );
}

/**
 * Returns ids of all balloons that should be removed.
 */
export function getTargetBalloonIds(
  balloons: BalloonItem[],
  targetColor: BalloonColor
): number[] {
  return balloons
    .filter((balloon) => !balloon.popped && balloon.type === targetColor)
    .map((balloon) => balloon.id);
}

/**
 * Counts balloons of the target color.
 */
export function getTargetBalloonCount(
  balloons: BalloonItem[],
  targetColor: BalloonColor
): number {
  return balloons.filter(
    (balloon) => !balloon.popped && balloon.type === targetColor
  ).length;
}
