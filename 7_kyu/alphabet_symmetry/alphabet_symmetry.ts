export const solve = (arr: string[]): number[] => {
  return arr.reduce((res, word) => {
    res.push(
      word
        .toUpperCase()
        .split("")
        .reduce((total, letter, index) => {
          const alphabetPos = letter.charCodeAt(0) - 64;
          return alphabetPos === index + 1 ? total + 1 : total;
        }, 0),
    );
    return res;
  }, [] as number[]);
};
