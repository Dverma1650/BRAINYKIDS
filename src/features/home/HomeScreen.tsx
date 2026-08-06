import DailyRewardModal from "@/features/daily-reward/DailyRewardModal";
import { DAILY_REWARDS } from "@/features/daily-reward/rewardData";
import GameStorage from "@/services/storage/GameStorage";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GameCard from "../../components/ui/GameCard";
import Header from "../../components/ui/Header";
import StatsCard from "../../components/ui/StatsCard";
import { GAMES } from "../../constants/games";
import { Colors } from "../../theme";

export default function HomeScreen() {
  const [rewardVisible, setRewardVisible] = useState(false);

  const [rewardDay, setRewardDay] = useState(1);

  const [claimedDays, setClaimedDays] = useState<number[]>([]);
  useEffect(() => {
    checkReward();
  }, []);

  async function checkReward() {
    const today = new Date().toDateString();

    const lastDate = await GameStorage.getLastRewardDate();

    const day = await GameStorage.getRewardDay();

    setRewardDay(day);

    if (lastDate !== today) {
      setRewardVisible(true);
    } else {
      setClaimedDays([day]);
    }
  }

  async function claimReward() {
    const reward = DAILY_REWARDS[rewardDay - 1];

    await GameStorage.addCoins(reward.coins);

    await GameStorage.setLastRewardDate(new Date().toDateString());

    setClaimedDays([rewardDay]);

    const nextDay = rewardDay === 7 ? 1 : rewardDay + 1;

    await GameStorage.setRewardDay(nextDay);

    setRewardVisible(false);
  }

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

      <DailyRewardModal
        visible={rewardVisible}
        currentDay={rewardDay}
        claimedDays={claimedDays}
        onClaim={claimReward}
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
