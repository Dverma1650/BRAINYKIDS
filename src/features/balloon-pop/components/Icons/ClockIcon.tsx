import { Circle, Line } from "react-native-svg";

export default function ClockIcon() {
  return (
    <>
      <Circle
        cx="0"
        cy="0"
        r="12"
        fill="#FFFFFF"
        stroke="#7C3AED"
        strokeWidth="2"
      />

      <Line
        x1="0"
        y1="0"
        x2="0"
        y2="-6"
        stroke="#7C3AED"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <Line
        x1="0"
        y1="0"
        x2="5"
        y2="3"
        stroke="#7C3AED"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  );
}
