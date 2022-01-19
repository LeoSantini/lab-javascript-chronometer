class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      return this.currentTime ++
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)      
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, "0");
  }

  stop() {
    // ... your code goes here
      return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    let seconds = this.currentTime % 60

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
