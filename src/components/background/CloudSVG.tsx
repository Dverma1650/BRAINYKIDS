import Svg, { Ellipse } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
};

export default function CloudSVG({ width = 140, height = 80 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 160 90">
      {/* Shadow */}

      <Ellipse cx="80" cy="48" rx="60" ry="22" fill="#D9E8F7" />

      {/* Cloud */}

      <Ellipse cx="45" cy="45" rx="28" ry="22" fill="white" />

      <Ellipse cx="75" cy="30" rx="34" ry="28" fill="white" />

      <Ellipse cx="110" cy="42" rx="28" ry="22" fill="white" />

      <Ellipse cx="80" cy="50" rx="52" ry="20" fill="white" />
    </Svg>
  );
}
