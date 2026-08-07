export type BalloonColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "pink"
  | "silver"
  | "gold"
  | "beige"
  | "brown"
  | "grey"
  | "black"
  | "white";

export type PowerBalloon =
  | "star"
  | "heart"
  | "clock"
  | "bomb"
  | "gift"
  | "magnet"
  | "ice"
  | "lightning";

export type BalloonType = BalloonColor | PowerBalloon;

export const POWER_BALLOONS: PowerBalloon[] = [
  "star",
  "heart",
  "clock",
  "bomb",
  "gift",
  "magnet",
  "ice",
  "lightning",
];

export interface BalloonItem {
  id: number;
  type: BalloonType;

  // Display color (hex)
  color: string;

  // Position
  x: number;
  y: number;

  // Movement
  speed: number;

  // Animation state
  popped: boolean;

  // Optional future properties
  level?: number;
  scale?: number;
  rotation?: number;
}

export interface GameState {
  score: number;
  lives: number;
  timer: number;

  // Current mission
  targetColor: BalloonColor;

  balloons: BalloonItem[];

  gameOver: boolean;
}
