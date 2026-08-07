export interface LevelConfig {
  level: number;
  balloons: number;
  speedMultiplier: number;
  targetScore: number;
  time: number;
  colors: number; // Number of colors unlocked
}

export const LEVELS: LevelConfig[] = [
  {
    level: 1,
    balloons: 8,
    colors: 4,
    speedMultiplier: 1,
    targetScore: 100,
    time: 60,
  },
  {
    level: 2,
    balloons: 10,
    colors: 6,
    speedMultiplier: 1.1,
    targetScore: 250,
    time: 60,
  },
  {
    level: 3,
    balloons: 12,
    colors: 8,
    speedMultiplier: 1.2,
    targetScore: 400,
    time: 55,
  },
  {
    level: 4,
    balloons: 14,
    colors: 10,
    speedMultiplier: 1.35,
    targetScore: 800,
    time: 55,
  },
  {
    level: 5,
    balloons: 16,
    colors: 12,
    speedMultiplier: 1.5,
    targetScore: 900,
    time: 50,
  },
  {
    level: 6,
    balloons: 18,
    colors: 13,
    speedMultiplier: 1.7,
    targetScore: 1000,
    time: 50,
  },
  {
    level: 7,
    balloons: 20,
    colors: 14,
    speedMultiplier: 1.9,
    targetScore: 1200,
    time: 45,
  },
  {
    level: 8,
    balloons: 22,
    colors: 15,
    speedMultiplier: 2.1,
    targetScore: 1500,
    time: 45,
  },
  {
    level: 9,
    balloons: 24,
    colors: 16,
    speedMultiplier: 2.3,
    targetScore: 1700,
    time: 40,
  },
  {
    level: 10,
    balloons: 26,
    colors: 16,
    speedMultiplier: 2.5,
    targetScore: 2000,
    time: 40,
  },
];
