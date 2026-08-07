import * as Speech from "expo-speech";

class SpeechService {
  private speaking = false;

  async speak(text: string) {
    if (this.speaking) {
      Speech.stop();
    }

    this.speaking = true;

    Speech.speak(text, {
      language: "en-US",
      pitch: 1.6,
      rate: 0.75,

      onDone: () => {
        this.speaking = false;
      },

      onStopped: () => {
        this.speaking = false;
      },
    });
  }

  stop() {
    Speech.stop();
    this.speaking = false;
  }

  speakTarget(color: string) {
    this.speak(`Click on the ${color} balloon`);
  }

  speakCorrect() {
    this.speak("Excellent!");
  }

  speakWrong(color: string) {
    this.speak(`Oops! That's not ${color}. Try again.`);
  }

  speakLevelComplete() {
    this.speak("Awesome! Level Complete!");
  }

  speakGameOver() {
    this.speak("Game Over! Great job! Let's play again.");
  }

  
}

export default new SpeechService();
