import SoundManager from "@/services/audio/SoundManager";
import { Stack } from "expo-router";
import { useEffect } from "react";
export default function RootLayout() {
  useEffect(() => {
    SoundManager.load();

    return () => {
      SoundManager.release();
    };
  }, []);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
