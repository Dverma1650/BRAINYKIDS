import { BalloonColor, BalloonType } from "./types";

export const GAME_DURATION = 30;
export const INITIAL_LIVES = 3;

export const SCORE_PER_CORRECT = 10;
export const SCORE_PER_WRONG = -5;

export const BALLOON_SPEED = 5000;
export const BALLOON_SIZE = 80;

export const BALLOON_COLORS: BalloonColor[] = [
  "red",
  "green",
  "blue",
  "yellow",
];

export const COLORS: Record<
  BalloonType,
  {
    emoji: string;
    hex: string;
    label: string;
  }
> = {
  red: {
    emoji: "🔴",
    hex: "#FF4D4F",
    label: "Red",
  },

  green: {
    emoji: "🟢",
    hex: "#22C55E",
    label: "Green",
  },

  blue: {
    emoji: "🔵",
    hex: "#3B82F6",
    label: "Blue",
  },

  yellow: {
    emoji: "🟡",
    hex: "#FACC15",
    label: "Yellow",
  },

  star: {
    emoji: "⭐",
    hex: "#FFD700",
    label: "Star",
  },

  heart: {
    emoji: "❤️",
    hex: "#FF69B4",
    label: "Heart",
  },

  clock: {
    emoji: "⏰",
    hex: "#8B5CF6",
    label: "Clock",
  },

  bomb: {
    emoji: "💣",
    hex: "#222222",
    label: "Bomb",
  },
};
