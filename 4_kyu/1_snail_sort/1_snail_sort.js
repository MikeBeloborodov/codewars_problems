"use strict";
/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
  * */
const snailSort = (array) => {
    const result = [];
    while (array.length) {
        result.push(...array.shift());
        console.log(result);
        array.forEach((item) => result.push(item.pop()));
        array.reverse().forEach((item) => item.reverse());
    }
    return result;
};
const case1 = snailSort([]);
console.assert(JSON.stringify(case1) === JSON.stringify([]), "case1");
const case2 = snailSort([[1]]);
console.assert(JSON.stringify(case2) === JSON.stringify([1]), "case2");
const case3 = snailSort([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
console.assert(JSON.stringify(case3) === JSON.stringify([1, 2, 3, 6, 9, 8, 7, 4, 5]), "case3");
