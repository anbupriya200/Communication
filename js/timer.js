/**
 * FluentPath - Universal Timer Utility (js/timer.js)
 */

class FluentTimer {
  constructor(options = {}) {
    this.durationSeconds = options.durationSeconds || 60;
    this.remainingSeconds = this.durationSeconds;
    this.intervalId = null;
    this.isRunning = false;
    this.onTick = options.onTick || null;
    this.onComplete = options.onComplete || null;
    this.mode = options.mode || "countdown"; // 'countdown' or 'stopwatch'
  }

  static formatTime(totalSeconds) {
    const mins = Math.floor(Math.abs(totalSeconds) / 60);
    const secs = Math.abs(totalSeconds) % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.intervalId = setInterval(() => {
      if (this.mode === "countdown") {
        this.remainingSeconds--;
        const percent = Math.max(0, (this.remainingSeconds / this.durationSeconds) * 100);
        
        if (this.onTick) {
          this.onTick(this.remainingSeconds, FluentTimer.formatTime(this.remainingSeconds), percent);
        }

        if (this.remainingSeconds <= 0) {
          this.stop();
          if (this.onComplete) {
            this.onComplete();
          }
        }
      } else {
        // Stopwatch mode
        this.remainingSeconds++;
        if (this.onTick) {
          this.onTick(this.remainingSeconds, FluentTimer.formatTime(this.remainingSeconds), 100);
        }
      }
    }, 1000);
  }

  pause() {
    if (!this.isRunning) return;
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  stop() {
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  reset(newDuration = null) {
    this.stop();
    if (newDuration !== null) {
      this.durationSeconds = newDuration;
    }
    this.remainingSeconds = this.mode === "countdown" ? this.durationSeconds : 0;
    if (this.onTick) {
      this.onTick(this.remainingSeconds, FluentTimer.formatTime(this.remainingSeconds), 100);
    }
  }
}

window.FluentTimer = FluentTimer;
