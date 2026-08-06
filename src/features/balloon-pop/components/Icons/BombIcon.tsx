import { Circle, Path } from "react-native-svg";

export default function BombIcon() {
  return (
    <>
      <Circle cx="0" cy="0" r="11" fill="#222" />
      <Path d="M6 -10 L12 -16" stroke="#666" strokeWidth="2" />
      <Circle cx="14" cy="-18" r="3" fill="#FACC15" />
    </>
  );
}
