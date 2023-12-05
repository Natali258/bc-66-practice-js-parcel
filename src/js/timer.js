const timer = {
  intervalId: null,
  refs: {},
  datasetValues: {
    days: ['день', 'дня', 'днів'],
    hours: ['година', 'години', 'годин'],
    minutes: ['хвилина', 'хвилини', 'хвилин'],
    seconds: ['секунда', 'секунди', 'секунд'],
  },

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
  },
  convertMS(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  updateTextContent(date) {
    Object.entries(date).forEach(([key, value], index) => {
      this.refs.timer.children[index].textContent = this.addLeadingZero(value);
      this.refs.timer.children[index].dataset.title = this.updateDataTitle(
        value,
        key
      );
    });
  },
  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  },

  updateDataTitle(value, key) {
    return this.datasetValues[key][
      value % 100 > 4 && value % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][value % 10 < 5 ? value % 10 : 5]
    ];
  },
};

timer.start('timer__items', '2023-12-14');
