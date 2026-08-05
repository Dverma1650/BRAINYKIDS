import * as Haptics from "expo-haptics";

class HapticManager {
  pop() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  success() {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }

  error() {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  }

  warning() {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  }

  medium() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  heavy() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
}

export default new HapticManager();
