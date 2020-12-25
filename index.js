var stopwatch = new Object();
var times = new Map();

stopwatch.start = (name) => {
  var previousRecord = times.get(name);
  if (previousRecord && !previousRecord.isStopped) return;

  times.set(name, {
    isStopped: false,
    previousStart: Date.now(),
    timeElapsed: previousRecord ? previousRecord.timeElapsed : 0,
  });
};

stopwatch.stop = (name) => {
  var previousRecord = times.get(name);
  if (!previousRecord || previousRecord.isStopped) return;

  times.set(name, {
    isStopped: true,
    timeElapsed:
      previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
  });
};

stopwatch.reset = (name) => {
  var previousRecord = times.get(name);
  if (!previousRecord) return;

  times.set(name, {
    isStopped: true,
    timeElapsed: 0,
  });
};

stopwatch.status = (name) => {
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

module.exports = stopwatch;
