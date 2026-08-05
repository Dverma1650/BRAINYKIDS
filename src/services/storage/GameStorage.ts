import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  HIGH_SCORE: "HIGH_SCORE",
  BEST_LEVEL: "BEST_LEVEL",
  COINS: "COINS",
};

class GameStorage {
  // --------------------------
  // High Score
  // --------------------------

  async getHighScore(): Promise<number> {
    const value = await AsyncStorage.getItem(KEYS.HIGH_SCORE);
    return value ? Number(value) : 0;
  }

  async saveHighScore(score: number) {
    const current = await this.getHighScore();

    if (score > current) {
      await AsyncStorage.setItem(KEYS.HIGH_SCORE, String(score));
    }
  }

  // --------------------------
  // Best Level
  // --------------------------

  async getBestLevel(): Promise<number> {
    const value = await AsyncStorage.getItem(KEYS.BEST_LEVEL);
    return value ? Number(value) : 1;
  }

  async saveBestLevel(level: number) {
    const current = await this.getBestLevel();

    if (level > current) {
      await AsyncStorage.setItem(KEYS.BEST_LEVEL, String(level));
    }
  }

  // --------------------------
  // Coins
  // --------------------------

  async getCoins(): Promise<number> {
    const value = await AsyncStorage.getItem(KEYS.COINS);
    return value ? Number(value) : 0;
  }

  async addCoins(amount: number) {
    const coins = await this.getCoins();
    await AsyncStorage.setItem(KEYS.COINS, String(coins + amount));
  }

  async spendCoins(amount: number) {
    const coins = await this.getCoins();

    if (coins >= amount) {
      await AsyncStorage.setItem(KEYS.COINS, String(coins - amount));
      return true;
    }

    return false;
  }
}

export default new GameStorage();
