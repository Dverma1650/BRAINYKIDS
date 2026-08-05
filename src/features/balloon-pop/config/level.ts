export interface LevelConfig {
  level: number;
  balloons: number;
  speedMultiplier: number;
  targetScore: number;
  time: number;
}

export const LEVELS: LevelConfig[] = [
  {
    level: 1,
    balloons: 4,
    speedMultiplier: 1,
    targetScore: 50,
    time: 30,
  },
  {
    level: 2,
    balloons: 5,
    speedMultiplier: 1.2,
    targetScore: 100,
    time: 30,
  },
  {
    level: 3,
    balloons: 6,
    speedMultiplier: 1.4,
    targetScore: 170,
    time: 25,
  },
  {
    level: 4,
    balloons: 7,
    speedMultiplier: 1.6,
    targetScore: 250,
    time: 25,
  },
  {
    level: 5,
    balloons: 8,
    speedMultiplier: 2,
    targetScore: 350,
    time: 20,
  },
];
