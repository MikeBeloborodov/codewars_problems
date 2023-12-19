"use strict";
/*
  Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
  * */
const tripledouble = (num1, num2) => {
    let flag = false;
    const firstFilter = [];
    num1
        .toString()
        .split("")
        .reduce((prev, curr) => {
        if (prev === curr && flag === true) {
            firstFilter.push(curr);
            flag = false;
            return curr;
        }
        else if (prev === curr) {
            flag = true;
        }
        return curr;
    });
    const num2AsArr = num2.toString().split("");
    for (let i = 0; i < firstFilter.length; i++) {
        for (let j = 0; j < num2AsArr.length - 1; j++) {
            if (num2AsArr[j] === firstFilter[i] &&
                num2AsArr[j + 1] === firstFilter[i]) {
                return 1;
            }
        }
    }
    return 0;
};
const case1 = tripledouble(451999277, 41177722899);
console.assert(case1 === 1, "case1 === 1");
const case2 = tripledouble(1222345, 12345);
console.assert(case2 === 0, "case2 === 0");
const case3 = tripledouble(666789, 12345667);
console.assert(case3 === 1, "case3 === 1");
const case4 = tripledouble(1112, 122);
console.assert(case4 === 0, "case4 === 0");
