/*
  Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
  * */

// my solution

export const pyramid = (n: number): Array<number[]> => {
  return (() => {
    const arr: number[][] = [];
    for (let i = 0; i < n; i++) {
      arr.push([]);
    }
    return arr;
  })().map((array, index) => {
    for (let i = 0; i < index + 1; i++) {
      array.push(1);
    }
    return array;
  });
};

const case1 = pyramid(0);
console.assert(JSON.stringify(case1) === JSON.stringify([]));

const case2 = pyramid(1);
console.assert(JSON.stringify(case2) === JSON.stringify([[1]]));

const case3 = pyramid(2);
console.assert(JSON.stringify(case3) === JSON.stringify([[1], [1, 1]]));

const case4 = pyramid(3);
console.assert(
  JSON.stringify(case4) === JSON.stringify([[1], [1, 1], [1, 1, 1]]),
);

// clever solution with initializing arrays
function pyramid2(n: number) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push([...Array(i + 1)].fill(1));
  }
  return res;
}

function pyramid3(n: number) {
  return Array(n)
    .fill(null)
    .map((e, i) => Array(i + 1).fill(1));
}
