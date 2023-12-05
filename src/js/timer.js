const timer = {
  intervalId: null,
  refs: {},
  start(rootSelector, targetDate) {
    const target = new Date(targetDate);
    let delta = target - Date.now();
    if (delta <= 0) {
      alert('Select date in future');
      return;
    }
    this.getRefs(rootSelector);

    this.intervalId = setInterval(() => {
      delta = target - Date.now();
      if (delta <= 0) {
        alert('Success dedline');
        clearInterval(this.intervalId);
        return;
      }
      const date = this.convertMS(delta);
      this.updateTextContent(date);
    }, 1000);
  },
  getRefs(rootSelector) {
    this.refs.timer = document.querySelector(`.${rootSelector}`);
    // console.log(rootSelector);
  },
  convertMS(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  updateTextContent(date) {
    // console.log(Object.entries(date));
    Object.entries(date).forEach(([key, value]) => {
      console.log(key, value);
      console.log(this.refs.timer.children);
    });
  },
};

timer.start('timer__items', '2023-12-14');
