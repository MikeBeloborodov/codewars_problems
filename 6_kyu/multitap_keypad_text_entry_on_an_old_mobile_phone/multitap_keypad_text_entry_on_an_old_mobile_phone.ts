export const presses = (phrase: string): number => {
  const numPad = [
    ["1"],
    ["a", "b", "c", "2"],
    ["d", "e", "f", "3"],
    ["g", "h", "i", "4"],
    ["j", "k", "l", "5"],
    ["m", "n", "o", "6"],
    ["p", "q", "r", "s", "7"],
    ["t", "u", "v", "8"],
    ["w", "x", "y", "z", "9"],
    ["*"],
    [" ", "0"],
    ["#"],
  ];
  return phrase
    .toLowerCase()
    .split("")
    .reduce((res, char) => {
      return (
        res + numPad.find((button) => button.includes(char))!.indexOf(char) + 1
      );
    }, 0);
};
