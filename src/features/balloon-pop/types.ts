export type BalloonColor = "red" | "green" | "blue" | "yellow";

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
  color: string;
  x: number;
  y: number;
  speed: number;
  popped: boolean;
}

export interface GameState {
  score: number;
  lives: number;
  timer: number;
  targetColor: BalloonColor;
  balloons: BalloonItem[];
  gameOver: boolean;
}
