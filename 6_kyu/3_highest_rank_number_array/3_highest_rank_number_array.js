"use strict";
/*
  Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
  * */
const highestRank = (arr) => {
    const map = {};
    arr.forEach((item) => {
        map[item] = map[item] ? map[item] + 1 : 1;
    });
    return parseInt([...Object.entries(map)]
        .sort((x, y) => {
        return y[1] - x[1];
    })
        .filter((value, index, array) => {
        return value[1] === array[0][1] ? true : false;
    })
        .reduce((acc, curr) => parseInt(acc[0]) > parseInt(curr[0]) ? acc : curr)[0]);
};
const case1 = highestRank([12, 10, 8, 12, 7, 6, 4, 10, 10, 12]);
console.assert(case1 === 12, "case1 === 12");
