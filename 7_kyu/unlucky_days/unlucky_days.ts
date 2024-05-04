export const unluckyDays = (year: number) => {
  let numOfFridays = 0;
  const friday = 5;
  for (let month = 0; month < 12; month++) {
    if (new Date(year, month, 13, 0, 0, 0, 0).getDay() === friday) {
      numOfFridays++;
    }
  }
  return numOfFridays;
};
