export const periodIsLate = (
  last: Date,
  today: Date,
  cycleLength: number,
): boolean => {
  return (today.getTime() - last.getTime()) / 1000 / 60 / 60 / 24 > cycleLength;
};
