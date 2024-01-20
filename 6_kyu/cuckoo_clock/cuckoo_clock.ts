export const cuckooClock = (inputTime: string, chimes: number): string => {
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
