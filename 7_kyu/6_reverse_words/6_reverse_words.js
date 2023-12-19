"use strict";
/*
  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
  * */
// my solution
const reverseWords = (str) => {
    return str
        .split(" ")
        .reduce((acc, curr) => {
        return (acc +
            curr.split("").reduce((acc2, curr2) => {
                return curr2 + acc2;
            }, "") +
            " ");
    }, "")
        .trim();
};
const case1 = reverseWords("The quick brown fox jumps over the lazy dog.");
console.assert(case1 === "ehT kciuq nworb xof spmuj revo eht yzal .god");
const case2 = reverseWords("apple");
console.assert(case2 === "elppa");
const case3 = reverseWords("a b c d");
console.assert(case3 === "a b c d");
const case4 = reverseWords("double  spaced  words");
console.assert(case4 === "elbuod  decaps  sdrow");
// better solution with reverse
const reverseWords2 = (str) => {
    return str
        .split(" ")
        .reduce((acc, curr) => {
        return acc + curr.split("").reverse().join("") + " ";
    }, "")
        .trim();
};
