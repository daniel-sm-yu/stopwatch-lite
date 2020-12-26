# stopwatch-lite
[![npm version](https://img.shields.io/npm/v/stopwatch-lite.svg?style=flat-square)](https://www.npmjs.org/package/stopwatch-lite)
[![install size](https://packagephobia.now.sh/badge?p=stopwatch-lite)](https://packagephobia.now.sh/result?p=stopwatch-lite)
[![npm downloads](https://img.shields.io/npm/dm/stopwatch-lite.svg?style=flat-square)](http://npm-stat.com/charts.html?package=stopwatch-lite)

[![NPM](https://nodei.co/npm/stopwatch-lite.png?stars=true)](https://www.npmjs.com/package/stopwatch-lite)

A stopwatch for all your time-measuring needs

## Installing

```shell
npm install stopwatch-lite
```
## Features
`start()` starts stopwatch, has no effect if the stopwatch is running

`stop()` stops stopwatch, has no effect if the stopwatch is stopped

`reset()` stops stopwatch and sets time to 0

`read()` returns number of milliseconds on stopwatch

To use multiple stopwatches, pass in the name of a particular stopwatch. Stopwatch names can be any value (including functions, objects, or any primitive).

## Usage

```js
import stopwatch from "stopwatch-lite";

stopwatch.start();
...
stopwatch.stop();
console.log(stopwatch.read());
```
```js
import sw from "stopwatch-lite";

sw.start("example");
sw.start(123);

foo().then(() => {
  sw.stop("example");
});

bar().then(() => {
  sw.stop(123);
});

console.log(`foo execution time: ${sw.read("example")} ms`);
console.log(`bar execution time: ${sw.read(123)} ms`);
```
```js
import sw from "stopwatch-lite";

let totalExecutionTime = 0;

for (let i = 0; i < 42; i++) {
  sw.start();
  foo();
  totalExecutionTime += sw.read();
  sw.reset();
}

console.log(`average execution time: ${totalExecutionTime / 42} ms`);
```
