import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  HIGH_SCORE: "high_score",
  LEVEL: "level",
  SETTINGS: "settings",
};

class StorageManager {
  async saveHighScore(score: number) {
    await AsyncStorage.setItem(KEYS.HIGH_SCORE, score.toString());
  }

  async getHighScore() {
    const value = await AsyncStorage.getItem(KEYS.HIGH_SCORE);
    return value ? Number(value) : 0;
  }

  async saveLevel(level: number) {
    await AsyncStorage.setItem(KEYS.LEVEL, level.toString());
  }

  async getLevel() {
    const value = await AsyncStorage.getItem(KEYS.LEVEL);
    return value ? Number(value) : 1;
  }

  async clear() {
    await AsyncStorage.clear();
  }
}

export default new StorageManager();
