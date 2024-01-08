/*
  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
  * */

// my solution
export const reverseWords = (str: string): string => {
  return str
    .split(" ")
    .reduce((acc, curr) => {
      return (
        acc +
        curr.split("").reduce((acc2, curr2) => {
          return curr2 + acc2;
        }, "") +
        " "
      );
    }, "")
    .trim();
};

// better solution with reverse
//const reverseWords2 = (str: string): string => {
//  return str
//    .split(" ")
//    .reduce((acc, curr) => {
//      return acc + curr.split("").reverse().join("") + " ";
//    }, "")
//    .trim();
//};
