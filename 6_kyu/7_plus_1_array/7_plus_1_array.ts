/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer
  * */

const upArray = (arr: number[]): number[] | null => {
  if (arr.length === 0) return null;
  if (arr.some((item) => (item < 0 ? true : item > 9 ? true : false)))
    return null;
  const res = (BigInt(arr.join("")) + BigInt(1))
    .toString()
    .split("")
    .map((n) => parseInt(n));
  if (res.length < arr.length) {
    while (res.unshift(0) !== arr.length) {
      continue;
    }
  }
  return res;
};

const case1 = upArray([4, 3, 2, 5]);
console.assert(JSON.stringify(case1) === JSON.stringify([4, 3, 2, 6]));

const case2 = upArray([0, 7]);
console.assert(JSON.stringify(case2) === JSON.stringify([0, 8]));

const case3 = upArray([9, 9]);
console.assert(JSON.stringify(case3) === JSON.stringify([1, 0, 0]));

const case4 = upArray([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
]);
console.assert(
  JSON.stringify(case4) ===
    JSON.stringify([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
    ]),
);

const case5 = upArray([0, 0, 4, 3, 9]);
console.assert(JSON.stringify(case5) === JSON.stringify([0, 0, 4, 4, 0]));
