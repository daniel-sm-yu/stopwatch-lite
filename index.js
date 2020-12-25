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
  times.delete(name);
}

export function status(name) {
  var previousRecord = times.get(name);
  if (previousRecord == undefined) {
    return null;
  } else if (previousRecord.isStopped) {
    return previousRecord;
  } else {
    return {
      isStopped: previousRecord.isStopped,
      timeElapsed:
        previousRecord.timeElapsed + Date.now() - previousRecord.previousStart,
    };
  }
}