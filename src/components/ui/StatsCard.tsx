import GameStorage from "@/services/storage/GameStorage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../theme";
import Card from "./Card";

export default function StatsCard() {
  const [coins, setCoins] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [bestLevel, setBestLevel] = useState(1);

  useEffect(() => {
    async function load() {
      setCoins(await GameStorage.getCoins());
      setHighScore(await GameStorage.getHighScore());
      setBestLevel(await GameStorage.getBestLevel());
    }

    load();
  }, []);
  return (
    <Card>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.number}>🪙 {coins}</Text>
          <Text style={styles.label}>Coins</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.number}>🏆 {highScore}</Text>
          <Text style={styles.label}>High Score</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.number}>⭐ {bestLevel}</Text>
          <Text style={styles.label}>Best Level</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    alignItems: "center",
    flex: 1,
  },

  number: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.text,
  },

  label: {
    color: Colors.textSecondary,
    marginTop: 6,
    fontSize: 14,
  },
});
