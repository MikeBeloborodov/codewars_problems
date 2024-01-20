export const moveZeroes = (arr: any): any[] => {
  let countZeroes = 0;
  const result = [...arr].filter((item) => {
    if (item === 0) {
      countZeroes += 1;
      return false;
    } else {
      return true;
    }
  });
  return [...result, ...Array(countZeroes).fill(0)];
};
