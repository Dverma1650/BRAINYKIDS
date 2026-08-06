import { Achievement } from "../types";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "score100",
    title: "Beginner",
    description: "Reach 100 score",
    target: 100,
    reward: 100,
    icon: "🥉",
  },
  {
    id: "score500",
    title: "Skilled",
    description: "Reach 500 score",
    target: 500,
    reward: 300,
    icon: "🥈",
  },
  {
    id: "score1000",
    title: "Master",
    description: "Reach 1000 score",
    target: 1000,
    reward: 500,
    icon: "🥇",
  },
  {
    id: "coins1000",
    title: "Rich",
    description: "Collect 1000 coins",
    target: 1000,
    reward: 300,
    icon: "💰",
  },
  {
    id: "level10",
    title: "Explorer",
    description: "Reach Level 10",
    target: 10,
    reward: 250,
    icon: "🚀",
  },
];
