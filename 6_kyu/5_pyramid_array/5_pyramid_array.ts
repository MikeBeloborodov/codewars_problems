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

// clever solution with initializing arrays
/*
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
  * */
