export const multiplyAll =
  (arr: number[]): Function =>
  (num: number): number[] =>
    arr.map((v) => v * num);
