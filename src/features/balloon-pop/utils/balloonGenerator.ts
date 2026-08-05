import { BALLOON_COLORS, COLORS } from "../constants";
import { BalloonColor, BalloonItem, BalloonType } from "../types";

let currentId = 1;

// Probability of power balloons
const POWER_BALLOONS: BalloonType[] = ["star", "heart", "clock", "bomb"];

function randomType(): BalloonType {
  const chance = Math.random();

  // 10% chance of power balloon
  if (chance < 0.1) {
    return POWER_BALLOONS[Math.floor(Math.random() * POWER_BALLOONS.length)];
  }

  // 90% chance of normal balloon
  return BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
}

function randomX() {
  return Math.floor(Math.random() * 260) + 30;
}

export function createBalloon(forcedType?: BalloonType): BalloonItem {
  const type = forcedType ?? randomType();

  return {
    id: currentId++,
    type,
    color: COLORS[type].hex,
    speed: Math.random() * 2 + 1.5,
    x: randomX(),
    y: 750,
    popped: false,
  };
}

export function createBalloons(
  count: number,
  targetColor: BalloonColor
): BalloonItem[] {
  const balloons: BalloonItem[] = [];

  // Always keep one correct balloon
  balloons.push(createBalloon(targetColor));

  while (balloons.length < count) {
    balloons.push(createBalloon());
  }

  return balloons.sort(() => Math.random() - 0.5);
}
