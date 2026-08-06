import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GameCard from "../../components/ui/GameCard";
import Header from "../../components/ui/Header";
import StatsCard from "../../components/ui/StatsCard";
import { GAMES } from "../../constants/games";
import { Colors } from "../../theme";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            <Header />
            <StatsCard />
          </>
        }
        renderItem={({ item }) => (
          <GameCard
            emoji={item.emoji}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
});
