var times = new Map();

function start(name) {
  var previousRecord = times.get(name);
  if (previousRecord && !previousRecord.isStopped) return;

  times.set(name, {
    isStopped: false,
    previousStart: Date.now(),
    timeElapsed: previousRecord ? previousRecord.timeElapsed : 0,
  });
}

function stop(name) {
  var previousRecord = times.get(name);
  if (!previousRecord || previousRecord.isStopped) return;

  times.set(name, {
    isStopped: true,
    timeElapsed:
      previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
  });
}

function reset(name) {
  var previousRecord = times.get(name);
  if (!previousRecord) return;

  times.set(name, {
    isStopped: true,
    timeElapsed: 0,
  });
}

function observe(name) {
  var previousRecord = times.get(name);
  if (!previousRecord || previousRecord.isStopped) {
    return previousRecord;
  }

  return {
    isStopped: previousRecord.isStopped,
    timeElapsed:
      previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
  };
}

exports = { start, stop, reset, observe };
