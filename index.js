var times = new Map();

export function start(name) {
  var previousRecord = times.get(name);
  if (previousRecord != undefined && !previousRecord.isStopped) return;

  times.set(name, {
    isStopped: false,
    previousStart: Date.now(),
    timeElapsed: previousRecord == undefined ? 0 : previousRecord.timeElapsed,
  });
}

export function stop(name) {
  var previousRecord = times.get(name);
  if (previousRecord == undefined || previousRecord.isStopped) return;

  times.set(name, {
    isStopped: true,
    timeElapsed:
      previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
  });
}

export function reset(name) {
  var previousRecord = times.get(name);
  if (previousRecord == undefined) return;

  times.set(name, {
    isStopped: true,
    timeElapsed: 0,
  });
}

export function status(name) {
  var previousRecord = times.get(name);
  if (previousRecord == undefined || previousRecord.isStopped) {
    return previousRecord;
  }

  return {
    isStopped: previousRecord.isStopped,
    timeElapsed:
      previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
  };
}
