import Svg, {
  Defs,
  Ellipse,
  FeGaussianBlur,
  Filter,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

type Props = {
  color: string;
  width?: number;
  height?: number;
};

export default function BalloonSVG({ color, width = 90, height = 130 }: Props) {
  const gradientId = `gradient-${color.replace("#", "")}`;

  return (
    <Svg width={width} height={height} viewBox="0 0 100 150">
      <Defs>
        <LinearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="white" stopOpacity="0.55" />

          <Stop offset="20%" stopColor={color} />

          <Stop offset="100%" stopColor={color} />
        </LinearGradient>

        <Filter id="shadow">
          <FeGaussianBlur stdDeviation="2" />
        </Filter>
      </Defs>

      {/* Shadow */}

      <Ellipse
        cx="52"
        cy="54"
        rx="30"
        ry="40"
        fill="#000"
        opacity="0.12"
        filter="url(#shadow)"
      />

      {/* Balloon */}

      <Ellipse cx="50" cy="50" rx="28" ry="38" fill={`url(#${gradientId})`} />

      {/* Gloss */}

      <Ellipse cx="40" cy="30" rx="7" ry="15" fill="white" opacity="0.45" />

      <Ellipse cx="46" cy="40" rx="4" ry="8" fill="white" opacity="0.25" />

      {/* Knot */}

      <Path d="M45 88 L50 96 L55 88 Z" fill={color} />

      {/* String */}

      <Path
        d="
            M50 96
            C60 110
            40 120
            55 135
            C65 145
            50 150
            50 150
          "
        stroke="#666"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );
}
