export const incrementer = (nums: number[]) =>
  nums.map((item, index) => +(item + index + 1).toString().split("").pop()!);
