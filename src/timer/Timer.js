function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = function () {
  const timerInterval = setInterval(() => {
    if (this.seconds === 0) {
      clearInterval(timerInterval);
    }

    this.seconds -= 1;
  }, 1000);
};

export default Timer;
