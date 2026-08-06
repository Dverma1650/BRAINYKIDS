import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  HIGH_SCORE: "HIGH_SCORE",
  BEST_LEVEL: "BEST_LEVEL",
  COINS: "COINS",

  OWNED_ITEMS: "OWNED_ITEMS",
  EQUIPPED_BALLOON: "EQUIPPED_BALLOON",
};

class GameStorage {
  // =====================================
  // HIGH SCORE
  // =====================================

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

  // =====================================
  // BEST LEVEL
  // =====================================

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

  // =====================================
  // COINS
  // =====================================

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

    if (coins < amount) {
      return false;
    }

    await AsyncStorage.setItem(KEYS.COINS, String(coins - amount));

    return true;
  }

  // =====================================
  // OWNED ITEMS
  // =====================================

  async getOwnedItems(): Promise<string[]> {
    const value = await AsyncStorage.getItem(KEYS.OWNED_ITEMS);

    if (!value) {
      return ["classic"];
    }

    return JSON.parse(value);
  }

  async unlockItem(id: string) {
    const owned = await this.getOwnedItems();

    if (!owned.includes(id)) {
      owned.push(id);

      await AsyncStorage.setItem(KEYS.OWNED_ITEMS, JSON.stringify(owned));
    }
  }

  // =====================================
  // EQUIPPED BALLOON
  // =====================================

  async getEquippedBalloon(): Promise<string> {
    const value = await AsyncStorage.getItem(KEYS.EQUIPPED_BALLOON);

    return value ?? "classic";
  }

  async equipBalloon(id: string) {
    await AsyncStorage.setItem(KEYS.EQUIPPED_BALLOON, id);
  }

  // =====================================
  // RESET
  // =====================================

  async resetGame() {
    await AsyncStorage.clear();
  }
}

export default new GameStorage();
