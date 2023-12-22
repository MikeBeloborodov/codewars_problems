"use strict";
/*
  https://www.codewars.com/kata/52597aa56021e91c93000cb0

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
  * */
const moveZeroes = (arr) => {
    let countZeroes = 0;
    const result = [...arr].filter((item) => {
        if (item === 0) {
            countZeroes += 1;
            return false;
        }
        else {
            return true;
        }
    });
    return [...result, ...Array(countZeroes).fill(0)];
};
const case1 = moveZeroes([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(case1);
console.assert(JSON.stringify(case1) === JSON.stringify([false, 1, 1, 2, 1, 3, "a", 0, 0]), "case1");
