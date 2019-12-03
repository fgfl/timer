/*Dec 3, 2019

  Implement an alarm clock / timer which will beep after a specified amount of time has passed.
  The user can specify an unlimited number of alarms using command line arguments
*/

// assume input time is in second
const inputArgs = process.argv
  .slice(2)
  .filter(time => !isNaN(time))
  .filter(time => time >= 0);

inputArgs.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
})

