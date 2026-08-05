import { Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Grass() {
  return (
    <View style={styles.container}>
      {Array.from({ length: 45 }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.blade,
            {
              left: index * (width / 45),
              height: 12 + Math.random() * 10,
              transform: [
                {
                  rotate: `${Math.random() * 30 - 15}deg`,
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 40,
  },

  blade: {
    position: "absolute",
    bottom: 0,

    width: 3,

    borderRadius: 2,

    backgroundColor: "#2FAF4A",
  },
});
