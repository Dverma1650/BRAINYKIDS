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
      pitch: 1.4,
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
    this.speak(`Can you find the ${color} balloon?`);
  }

  speakCorrect(color?: string) {
    if (color) {
      this.speak(`Great job! That's the ${color} balloon!`);
    } else {
      this.speak("Great job!");
    }
  }

  speakWrong(color: string) {
    this.speak(`Oops! Find the ${color} balloon.`);
  }

  speakLevelComplete(level: number) {
    this.speak(`Fantastic! You finished level ${level}!`);
  }

  speakGameOver() {
    this.speak("Game over. You did an amazing job. Let's play again!");
  }

  speakWelcome() {
    this.speak("Welcome to Balloon Pop! Let's learn colors together!");
  }
}

export default new SpeechService();
