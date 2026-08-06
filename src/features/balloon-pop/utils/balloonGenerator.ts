import { BALLOON_COLORS, COLORS, POWER_BALLOON_CHANCE } from "../constants";
import {
  BalloonColor,
  BalloonItem,
  BalloonType,
  POWER_BALLOONS,
} from "../types";

export function createBalloon(forcedColor?: BalloonColor): BalloonItem {
  let type: BalloonType;

  if (Math.random() < POWER_BALLOON_CHANCE) {
    type = POWER_BALLOONS[Math.floor(Math.random() * POWER_BALLOONS.length)];
  } else {
    type =
      forcedColor ??
      BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
  }

  return {
    id: Date.now() + Math.random(),
    type,
    color: COLORS[type].hex,
    x: Math.random() * 320,
    y: 350 + Math.random() * 500, // New balloons come from bottom
    speed: 1 + Math.random() * 0.7,
    popped: false,
  };
}

function createInitialBalloons(count: number): BalloonItem[] {
  const balloons: BalloonItem[] = [];

  for (let i = 0; i < count; i++) {
    const balloon = createBalloon(COLORS[i % COLORS.length]);

    balloons.push({
      ...balloon,
      x: 20 + Math.random() * 280,
      y: 120 + (i % 5) * 100 + Math.random() * 30,
      speed: 3 + Math.random() * 2,
    });
  }

  return balloons;
}
