import { Line, Rect } from "react-native-svg";

export default function GiftIcon() {
  return (
    <>
      <Rect x="-10" y="-8" width="20" height="16" rx="2" fill="#F59E0B" />

      <Rect x="-10" y="-14" width="20" height="6" rx="2" fill="#EF4444" />

      <Line x1="0" y1="-14" x2="0" y2="8" stroke="white" strokeWidth="2" />

      <Line x1="-10" y1="-1" x2="10" y2="-1" stroke="white" strokeWidth="2" />
    </>
  );
}
