import { FlatList, Modal, StyleSheet, Text, View } from "react-native";

import AchievementCard from "./AchievementCard";

type Props = {
  visible: boolean;
  achievements: any[];
};

export default function AchievementModal({ visible, achievements }: Props) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>🏆 Achievements</Text>

        <FlatList
          data={achievements}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AchievementCard
              title={item.title}
              description={item.description}
              reward={item.reward}
              unlocked={item.unlocked}
            />
          )}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FB",
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 20,
  },
});
