import GameStorage from "@/services/storage/GameStorage";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ShopItemCard from "./components/ShopItemCard";
import { SHOP_ITEMS } from "./ShopItem";
import { ShopItem } from "./types";

export default function ShopScreen() {
  const [coins, setCoins] = useState(0);

  const [equipped, setEquipped] = useState("classic");

  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const currentCoins = await GameStorage.getCoins();

    const unlocked = await GameStorage.getOwnedItems();

    const currentSkin = await GameStorage.getEquippedBalloon();

    setCoins(currentCoins);

    setEquipped(currentSkin);

    setItems(
      SHOP_ITEMS.map((item) => ({
        ...item,
        owned: unlocked.includes(item.id),
      }))
    );
  }

  async function buyItem(item: ShopItem) {
    if (item.owned) return;

    const success = await GameStorage.spendCoins(item.price);

    if (!success) {
      alert("Not enough coins");
      return;
    }

    await GameStorage.unlockItem(item.id);

    await GameStorage.equipBalloon(item.id);

    await loadData();
  }

  async function equipItem(item: ShopItem) {
    if (!item.owned) return;

    await GameStorage.equipBalloon(item.id);

    setEquipped(item.id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Balloon Shop</Text>

      <Text style={styles.coins}>🪙 {coins}</Text>

      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        renderItem={({ item }) => (
          <ShopItemCard
            item={item}
            coins={coins}
            equipped={equipped === item.id}
            onBuy={() => buyItem(item)}
            onEquip={() => equipItem(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
    paddingTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },

  coins: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 18,
    fontWeight: "600",
  },
});
