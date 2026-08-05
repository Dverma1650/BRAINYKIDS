import { AudioPlayer, createAudioPlayer } from "expo-audio";

class SoundManager {
  private players: Record<string, AudioPlayer> = {};

  private backgroundPlayer?: AudioPlayer;

  async load() {
    // Sound Effects
    this.players = {
      pop: createAudioPlayer(require("../../../assets/sounds/pop.mp3")),

      wrong: createAudioPlayer(require("../../../assets/sounds/wrong.mp3")),

      levelUp: createAudioPlayer(
        require("../../../assets/sounds/level-up.mp3"),
      ),

      gameOver: createAudioPlayer(
        require("../../../assets/sounds/game-over.mp3"),
      ),

      click: createAudioPlayer(require("../../../assets/sounds/click.mp3")),
    };

    // Background Music
    this.backgroundPlayer = createAudioPlayer(
      require("../../../assets/sounds/background.mp3"),
    );

    this.backgroundPlayer.loop = true;
    this.backgroundPlayer.volume = 0.3;
  }

  // -------------------------
  // Sound Effects
  // -------------------------

  play(name: keyof typeof this.players) {
    const player = this.players[name];

    if (!player) return;

    player.seekTo(0);
    player.play();
  }

  // -------------------------
  // Background Music
  // -------------------------

  playBackground() {
    if (!this.backgroundPlayer) return;

    this.backgroundPlayer.seekTo(0);
    this.backgroundPlayer.play();
  }

  pauseBackground() {
    this.backgroundPlayer?.pause();
  }

  resumeBackground() {
    this.backgroundPlayer?.play();
  }

  stopBackground() {
    if (!this.backgroundPlayer) return;

    this.backgroundPlayer.pause();
    this.backgroundPlayer.seekTo(0);
  }

  // -------------------------
  // Cleanup
  // -------------------------

  release() {
    Object.values(this.players).forEach((player) => {
      player.release();
    });

    this.backgroundPlayer?.release();
  }
}

export default new SoundManager();
