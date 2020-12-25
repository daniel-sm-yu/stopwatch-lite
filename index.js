var times = new Map();

const start = (name) => {
  var previousRecord = times.get(name);
  if (previousRecord && !previousRecord.isStopped) return;

  times.set(name, {
    isStopped: false,
    previousStart: Date.now(),
    timeElapsed: previousRecord ? previousRecord.timeElapsed : 0,
  });
};

const stop = (name) => {
  var previousRecord = times.get(name);
  if (!previousRecord || previousRecord.isStopped) return;

  times.set(name, {
    isStopped: true,
    timeElapsed:
      previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
  });
};

const reset = (name) => {
  var previousRecord = times.get(name);
  if (!previousRecord) return;

  times.set(name, {
    isStopped: true,
    timeElapsed: 0,
  });
};

const status = (name) => {
  var previousRecord = times.get(name);
  if (!previousRecord || previousRecord.isStopped) {
    return previousRecord;
  }

  return {
    isStopped: previousRecord.isStopped,
    timeElapsed:
      previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
  };
};

export default {
  start,
  stop,
  reset,
  status,
};
