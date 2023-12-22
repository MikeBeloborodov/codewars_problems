"use strict";
/*
  https://www.codewars.com/kata/520b9d2ad5c005041100000f

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
  * */
const pigIt = (str) => {
    return str
        .split(" ")
        .map((item) => new RegExp(/[a-zA-Z]+/).test(item)
        ? item.slice(1) + item[0] + "ay"
        : item)
        .join(" ");
};
const case1 = pigIt("Pig latin is cool !");
console.log(case1);
console.assert(case1 === "igPay atinlay siay oolcay !", "case1");
