export const ranking = (arr: number[]): number[] => {
  return [...arr]
    .sort((x, y) => y - x)
    .map((_, index, array) => array.indexOf(arr[index]) + 1);
};
