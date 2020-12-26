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

const read = (name) => {
  var previousRecord = times.get(name);
  if (!previousRecord) return null;

  return previousRecord.timeElapsed + previousRecord.isStopped
    ? 0
    : Date.now() - previousRecord.previousStart;
};

module.exports = {
  start,
  stop,
  reset,
  read,
};
