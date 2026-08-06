import { useEffect, useState } from "react";

import GameStorage from "@/services/storage/GameStorage";

import { BalloonType } from "../types";
import BalloonSVG from "./BalloonSVG";
import GalaxyBalloon from "./skins/GalaxyBalloon";
import GoldBalloon from "./skins/GoldBalloon";
import RainbowBalloon from "./skins/RainbowBalloon";

type Props = {
  type: BalloonType;
  color: string;
};

export default function BalloonRenderer({
  type,
  color,
}: Props) {
  const [skin, setSkin] = useState("classic");

  useEffect(() => {
    loadSkin();
  }, []);

  async function loadSkin() {
    const current = await GameStorage.getEquippedBalloon();
    setSkin(current);
  }

  switch (skin) {
    case "gold":
      return <GoldBalloon type={type} />;

    case "galaxy":
      return <GalaxyBalloon type={type} />;

    case "rainbow":
      return <RainbowBalloon type={type} />;

    default:
      return (
        <BalloonSVG
          type={type}
          color={color}
        />
      );
  }
}