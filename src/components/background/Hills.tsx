import Svg, { Path } from "react-native-svg";

export default function Hills() {
  return (
    <Svg
      width="100%"
      height={220}
      viewBox="0 0 400 220"
      style={{
        position: "absolute",
        bottom: 0,
      }}
    >
      {/* Back Hill */}

      <Path
        d="
          M0 170
          Q60 110 130 160
          Q210 90 290 160
          Q340 120 400 170
          L400 220
          L0 220
          Z
        "
        fill="#7ED957"
      />

      {/* Front Hill */}

      <Path
        d="
          M0 190
          Q90 120 180 190
          Q280 100 400 180
          L400 220
          L0 220
          Z
        "
        fill="#56C271"
      />
    </Svg>
  );
}
