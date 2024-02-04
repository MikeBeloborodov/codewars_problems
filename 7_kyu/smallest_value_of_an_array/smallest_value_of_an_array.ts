export const min = (arr: number[], toReturn: string): number => {
  let index = 0;
  let value = arr[0];

  arr.forEach((v, i) => {
    index = v < value ? i : index;
    value = v < value ? v : value;
  });

  return toReturn === "value" ? value : index;
};
