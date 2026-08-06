import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { DAILY_REWARDS } from "./rewardData";
import RewardDay from "./RewardDay";

type Props = {
  visible: boolean;
  currentDay: number;
  claimedDays: number[];
  onClaim: () => void;
};

export default function DailyRewardModal({
  visible,
  currentDay,
  claimedDays,
  onClaim,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>🎁 Daily Reward</Text>

          <View style={styles.grid}>
            {DAILY_REWARDS.map((item) => (
              <RewardDay
                key={item.day}
                day={item.day}
                coins={item.coins}
                today={item.day === currentDay}
                claimed={claimedDays.includes(item.day)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={onClaim}>
            <Text style={styles.buttonText}>Claim Reward</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#4F46E5",
    paddingVertical: 16,
    borderRadius: 18,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },
});
