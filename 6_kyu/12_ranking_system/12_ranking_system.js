"use strict";
/*
You are given an array of unique numbers. The numbers represent points. The higher the number the higher the points. In the array [1,3,2] 3 is the highest point value so it gets 1st place. 2 is the second highest so it gets second place. 1 is the 3rd highest so it gets 3rd place.

Your task is to return an array giving each number its rank in the array.

input // [1,3,2]
output // [3,1,2]
rankings([1,2,3,4,5]) // [5,4,3,2,1]
rankings([3,4,1,2,5])//  [3,2,5,4,1]
rankings([10,20,40,50,30]) //  [5, 4, 2, 1, 3]
rankings([1, 10]) //   [2, 1]
rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]) // [5, 4, 6, 7, 1, 9, 10, 2, 8, 3]
  * */
const ranking = (arr) => {
    return [...arr]
        .sort((x, y) => y - x)
        .map((item, index, array) => array.indexOf(arr[index]) + 1);
};
const case1 = ranking([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]);
console.assert(JSON.stringify(case1) === JSON.stringify([5, 4, 6, 7, 1, 9, 10, 2, 8, 3]), "case1");
const case2 = ranking([10, 20, 40, 50, 30]);
console.assert(JSON.stringify(case2) === JSON.stringify([5, 4, 2, 1, 3]));
