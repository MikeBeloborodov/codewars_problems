export const findDigit = (num: number, nth: number): number => {
  const numStr = num.toString().split("").reverse();
  if (numStr.length < nth) return 0;
  if (nth <= 0) return -1;
  return numStr[nth - 1] === "-" ? 0 : +numStr[nth - 1];
};
