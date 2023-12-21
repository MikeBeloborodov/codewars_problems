/*
  The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a number n, determine the time when the cuckoo bird has chimed n  times.

Input Parameters:
initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
n - an integer representing the target number of chimes, with 1 <= n <= 200.

Return Value: The time when the cuckoo bird has chimed n  times - a string in the same format as initial_time.

If the cuckoo bird chimes at initial_time, include those chimes in the count. If the nth chime is reached on the hour, report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).

Example: "03:38", 19   should return "06:00".
Explanation: It chimes once at "03:45", 4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00", and once each at "05:15", "05:30", "05:45". At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".

Source: International Collegiate Programming Contest, North Central North American Regional, 2023.
  * */

const cuckooClock = (inputTime: string, chimes: number): string => {
  let hours = parseInt(inputTime.slice(0, 2));
  let minutes = parseInt(inputTime.slice(3, 5));
  let currentChimes = 0;
  while (currentChimes < chimes) {
    if (minutes === 60) {
      minutes = 0;
      hours < 12 ? (hours += 1) : (hours = 1);
    }
    if (minutes === 0) currentChimes += hours;
    if (minutes === 15 || minutes === 30 || minutes === 45) currentChimes += 1;
    if (currentChimes >= chimes) break;
    minutes += 1;
  }
  return `${
    hours.toString().length < 2 ? "0" + hours.toString() : hours.toString()
  }:${
    minutes.toString().length < 2
      ? "0" + minutes.toString()
      : minutes.toString()
  }`;
};

const case1 = cuckooClock("07:22", 1);
console.assert(case1 === "07:30", "case1");

const case2 = cuckooClock("12:22", 2);
console.assert(case2 === "12:45", "case2");

const case3 = cuckooClock("01:30", 2);
console.assert(case3 === "01:45", "case3");

const case4 = cuckooClock("04:01", 10);
console.assert(case4 === "05:30", "case4");

const case5 = cuckooClock("03:38", 19);
console.assert(case5 === "06:00", "case5");
