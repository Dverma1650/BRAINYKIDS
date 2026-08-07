import { COLOR_LEVELS } from "../config/colorLevels";
import { COLORS, POWER_BALLOON_CHANCE } from "../constants";
import {
  BalloonColor,
  BalloonItem,
  BalloonType,
  POWER_BALLOONS,
} from "../types";

// export function createBalloon(forcedColor?: BalloonColor): BalloonItem {
//   let type: BalloonType;

//   if (Math.random() < POWER_BALLOON_CHANCE) {
//     type = POWER_BALLOONS[Math.floor(Math.random() * POWER_BALLOONS.length)];
//   } else {
//     type =
//       forcedColor ??
//       BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
//   }

//   return {
//     id: Date.now() + Math.random(),
//     type,
//     color: COLORS[type].hex,
//     x: Math.random() * 320,
//     y: 350 + Math.random() * 500, // New balloons come from bottom
//     speed: 1 + Math.random() * 0.7,
//     popped: false,
//   };
// }
export function createBalloon(
  level: number = 1,
  forcedColor?: BalloonColor
): BalloonItem {
  let type: BalloonType;

  // Make sure level is always valid
  const safeLevel = Number(level) || 1;

  const levelIndex = Math.min(
    Math.max(safeLevel - 1, 0),
    COLOR_LEVELS.length - 1
  );

  const availableColors = COLOR_LEVELS[levelIndex] ?? COLOR_LEVELS[0];

  if (Math.random() < POWER_BALLOON_CHANCE) {
    type = POWER_BALLOONS[Math.floor(Math.random() * POWER_BALLOONS.length)];
  } else {
    const selectedColor =
      forcedColor ??
      availableColors[Math.floor(Math.random() * availableColors.length)];

    type = selectedColor as BalloonType;
  }

  return {
    id: Date.now() + Math.random(),
    type,
    color: COLORS[type].hex,
    x: Math.random() * 320,
    y: 350 + Math.random() * 500,
    speed: 1 + Math.random() * 0.7,
    popped: false,
  };
}
