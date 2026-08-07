import { useEffect } from "react";

import SoundManager from "@/services/audio/SoundManager";
import HapticManager from "@/services/haptics/HapticManager";
import GameStorage from "@/services/storage/GameStorage";
import SpeechService from "@/services/speech/SpeechService";

type Props = {
  score: number;

  targetScore: number;

  levelComplete: boolean;

  maxLevel: boolean;

  setFrozen: (v: boolean) => void;

  setLevelComplete: (v: boolean) => void;
};

export default function useLevel({
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
        SpeechService.speakCorrect();
      }

      HapticManager.success();

      setFrozen(true);

      setLevelComplete(true);
    }

    completeLevel();
  }, [score]);
}
