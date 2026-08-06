export type ShopCategory = "balloon" | "background" | "trail" | "sound";

export interface ShopItem {
  id: string;
  name: string;
  price: number;
  owned: boolean;
  previewColor: string;
}
