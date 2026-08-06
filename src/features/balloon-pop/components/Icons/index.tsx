import GiftIcon from "../Icons/GiftIcon";
import IceIcon from "../Icons/IceIcon";
import LightningIcon from "../Icons/LightningIcon";
import MagnetIcon from "../Icons/MagnetIcon";
import ClockIcon from "../Icons/ClockIcon";
import BombIcon from "./BombIcon";
import HeartIcon from "./HeartIcon";
import StarIcon from "./StarIcon";

import { BalloonType } from "../../types";

export function BalloonIcon({ type }: { type: BalloonType }) {
  switch (type) {
    case "star":
      return <StarIcon />;

    case "heart":
      return <HeartIcon />;

    case "bomb":
      return <BombIcon />;

    case "clock":
      return <ClockIcon />;

    case "gift":
      return <GiftIcon />;

    case "ice":
      return <IceIcon />;

    case "magnet":
      return <MagnetIcon />;

    case "lightning":
      return <LightningIcon />;

    default:
      return null;
  }
}
