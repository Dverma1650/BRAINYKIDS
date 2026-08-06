import { useState } from "react";

export default function useScore() {
  const [combo, setCombo] = useState(1);

  const [lastPopTime, setLastPopTime] = useState(0);

  const COMBO_WINDOW = 1000;

  function calculateScore() {
    const now = Date.now();

    let currentCombo = 1;

    if (now - lastPopTime <= COMBO_WINDOW) {
      currentCombo = combo + 1;
    }

    setCombo(currentCombo);

    setLastPopTime(now);

    return currentCombo * 10;
  }

  function resetCombo() {
    setCombo(1);
  }

  return {
    combo,

    calculateScore,

    resetCombo,

    setCombo,

    setLastPopTime,
  };
}
