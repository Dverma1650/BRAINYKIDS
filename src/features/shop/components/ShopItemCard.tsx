import { Pressable, StyleSheet, Text, View } from "react-native";

import BalloonSVG from "@/features/balloon-pop/components/BalloonSVG";
import { ShopItem } from "../types";

type Props = {
  item: ShopItem;
  coins: number;
  equipped: boolean;
  onBuy: () => void;
  onEquip: () => void;
};

export default function ShopItemCard({
  item,
  equipped,
  onBuy,
  onEquip,
}: Props) {
  return (
    <View style={styles.card}>
      <BalloonSVG color={item.previewColor} type="red" width={60} height={80} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.price}>🪙 {item.price}</Text>

      <Pressable style={styles.button} onPress={item.owned ? onEquip : onBuy}>
        <Text style={styles.buttonText}>
          {equipped ? "Using" : item.owned ? "Equip" : "Buy"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "46%",
    margin: 8,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 4,
  },

  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
  },

  price: {
    marginVertical: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
