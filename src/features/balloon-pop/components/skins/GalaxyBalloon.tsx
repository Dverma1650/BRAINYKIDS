import BalloonSVG from "../BalloonSVG";
import { BalloonType } from "../../types";

type Props = {
  type: BalloonType;
};

export default function GalaxyBalloon({ type }: Props) {
  return (
    <BalloonSVG
      type={type}
      color="#6D28D9"
    />
  );
}