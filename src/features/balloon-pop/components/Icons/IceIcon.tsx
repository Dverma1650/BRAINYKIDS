import { Line } from "react-native-svg";

export default function IceIcon() {
  return (
    <>
      <Line x1="0" y1="-12" x2="0" y2="12" stroke="#38BDF8" strokeWidth="2" />
      <Line x1="-10" y1="0" x2="10" y2="0" stroke="#38BDF8" strokeWidth="2" />

      <Line x1="-7" y1="-7" x2="7" y2="7" stroke="#38BDF8" strokeWidth="2" />
      <Line x1="7" y1="-7" x2="-7" y2="7" stroke="#38BDF8" strokeWidth="2" />
    </>
  );
}
