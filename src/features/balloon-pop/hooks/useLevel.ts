import { useEffect } from "react";

import SoundManager from "@/services/audio/SoundManager";
import HapticManager from "@/services/haptics/HapticManager";
import SpeechService from "@/services/speech/SpeechService";
import GameStorage from "@/services/storage/GameStorage";

type Props = {
  level: number;
  score: number;

  targetScore: number;

  levelComplete: boolean;

  maxLevel: boolean;

  setFrozen: (v: boolean) => void;

  setLevelComplete: (v: boolean) => void;
};

export default function useLevel({
  level,
  score,
  targetScore,
  levelComplete,
  maxLevel,
  setFrozen,
  setLevelComplete,
}: Props) {
  useEffect(() => {
    if (levelComplete) return;

    if (maxLevel) return;

    if (score < targetScore) return;

    async function completeLevel() {
      const enabled = await GameStorage.getSoundEnabled();

      if (enabled) {
        SoundManager.play("levelUp");
        SpeechService.speakLevelComplete(level);
      }

      HapticManager.success();

      setFrozen(true);

      setLevelComplete(true);
    }

    completeLevel();
  }, [score]);
}
