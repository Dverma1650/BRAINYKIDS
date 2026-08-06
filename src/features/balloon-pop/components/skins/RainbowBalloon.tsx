import { BalloonType } from "../../types";
import BalloonSVG from "../BalloonSVG";

type Props = {
  type: BalloonType;
};

export default function RainbowBalloon({ type }: Props) {
  return <BalloonSVG type={type} color="#EC4899" />;
}
