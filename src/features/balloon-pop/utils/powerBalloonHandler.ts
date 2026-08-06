import { PowerBalloon } from "../types";

export type PowerReward = {
  score: number;
  lives: number;
  timer: number;
  floatingText: string;
};

export function getPowerBalloonReward(type: PowerBalloon): PowerReward | null {
  switch (type) {
    case "star":
      return {
        score: 50,
        lives: 0,
        timer: 0,
        floatingText: "⭐ +50",
      };

    case "heart":
      return {
        score: 0,
        lives: 1,
        timer: 0,
        floatingText: "❤️ +1",
      };

    case "clock":
      return {
        score: 0,
        lives: 0,
        timer: 5,
        floatingText: "⏰ +5s",
      };

    case "bomb":
      return {
        score: -20,
        lives: 0,
        timer: 0,
        floatingText: "💣 -20",
      };

    case "gift":
      return {
        score: 100,
        lives: 0,
        timer: 0,
        floatingText: "🎁 +100",
      };

    case "magnet":
      return {
        score: 0,
        lives: 0,
        timer: 0,
        floatingText: "🧲 Magnet",
      };

    case "ice":
      return {
        score: 0,
        lives: 0,
        timer: 0,
        floatingText: "❄️ Freeze",
      };

    case "lightning":
      return {
        score: 30,
        lives: 0,
        timer: 0,
        floatingText: "⚡ +30",
      };

    default:
      return null;
  }
}
