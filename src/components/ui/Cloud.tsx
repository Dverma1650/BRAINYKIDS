import { StyleSheet, Text } from "react-native";

type Props = {
  top: number;
  left: number;
};

export default function Cloud({ top, left }: Props) {
  return (
    <Text
      style={[
        styles.cloud,
        {
          top,
          left,
        },
      ]}
    >
      ☁️
    </Text>
  );
}

const styles = StyleSheet.create({
  cloud: {
    position: "absolute",
    fontSize: 45,
  },
});
