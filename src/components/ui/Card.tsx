import { StyleSheet, View, ViewProps } from "react-native";
import { Colors, Radius, Shadows, Spacing } from "../../theme";

type CardProps = ViewProps;

export default function Card({ children, style, ...props }: CardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadows.card,
  },
});
