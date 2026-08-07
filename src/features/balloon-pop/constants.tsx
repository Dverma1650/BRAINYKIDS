import { BalloonColor, BalloonType } from "./types";

export const GAME_DURATION = 30;
export const INITIAL_LIVES = 3;

export const SCORE_PER_CORRECT = 10;
export const SCORE_PER_WRONG = -5;

export const BALLOON_SPEED = 5000;
export const BALLOON_SIZE = 80;

export const BALLOON_COLORS: BalloonColor[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
  "silver",
  "gold",
  "beige",
  "brown",
  "grey",
  "black",
  "white",
];

export const POWER_BALLOON_CHANCE = 0.08;

export const COLORS: Record<
  BalloonType,
  {
    emoji: string;
    hex: string;
    label: string;
  }
> = {
  // ===== Normal Colors =====
  red: {
    emoji: "🔴",
    hex: "#FF4D4F",
    label: "Red",
  },

  orange: {
    emoji: "🟠",
    hex: "#FF8C42",
    label: "Orange",
  },

  yellow: {
    emoji: "🟡",
    hex: "#FACC15",
    label: "Yellow",
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

  indigo: {
    emoji: "🔵",
    hex: "#3F51B5",
    label: "Indigo",
  },

  violet: {
    emoji: "🟣",
    hex: "#7C3AED",
    label: "Violet",
  },

  purple: {
    emoji: "🟪",
    hex: "#A855F7",
    label: "Purple",
  },

  pink: {
    emoji: "🩷",
    hex: "#EC4899",
    label: "Pink",
  },

  silver: {
    emoji: "⚪",
    hex: "#C0C0C0",
    label: "Silver",
  },

  gold: {
    emoji: "🟡",
    hex: "#FFD700",
    label: "Gold",
  },

  beige: {
    emoji: "🟤",
    hex: "#F5F5DC",
    label: "Beige",
  },

  brown: {
    emoji: "🤎",
    hex: "#8B4513",
    label: "Brown",
  },

  grey: {
    emoji: "⚪",
    hex: "#808080",
    label: "Grey",
  },

  black: {
    emoji: "⚫",
    hex: "#222222",
    label: "Black",
  },

  white: {
    emoji: "⚪",
    hex: "#FFFFFF",
    label: "White",
  },

  // ===== Power Balloons =====

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

  gift: {
    emoji: "🎁",
    hex: "#F59E0B",
    label: "Gift",
  },

  magnet: {
    emoji: "🧲",
    hex: "#EF4444",
    label: "Magnet",
  },

  ice: {
    emoji: "❄️",
    hex: "#38BDF8",
    label: "Ice",
  },

  lightning: {
    emoji: "⚡",
    hex: "#FACC15",
    label: "Lightning",
  },
};
