import { StyleSheet, Text, View } from "react-native";
import { Colors, Spacing, Typography } from "../../theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>🌞 Good Evening</Text>

      <Text style={styles.title}>BrainyKids</Text>

      <Text style={styles.subtitle}>Let's learn something fun today!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xl,
  },

  greeting: {
    color: Colors.textSecondary,
    fontSize: Typography.body,
  },

  title: {
    color: Colors.primary,
    fontSize: Typography.h1,
    fontWeight: "700",
    marginTop: 8,
  },

  subtitle: {
    color: Colors.textSecondary,
    fontSize: Typography.body,
    marginTop: 8,
  },
});
