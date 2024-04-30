/*
  https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

    Build Tower
  Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

  For example, a tower with 3 floors looks like this:

  [
    "  *  ",
    " *** ", 
    "*****"
  ]
  And a tower with 6 floors looks like this:

  [
    "     *     ", 
    "    ***    ", 
    "   *****   ", 
    "  *******  ", 
    " ********* ", 
    "***********"
  ]
* */

export const towerBuilder = (nFloors: number): string[] => {
  return Array(nFloors)
    .fill("*".repeat(nFloors * 2 - 1))
    .map((e, i) => {
      return " ".repeat(i) + e.slice(i, e.length - i) + " ".repeat(i);
    })
    .reverse();
};
