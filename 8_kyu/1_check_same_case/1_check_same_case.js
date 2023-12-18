/*
  * Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
  * */

// my solution
//
const sameCase = (a, b) => {
  const evaluationOfA =
    a.charCodeAt() > 64 && a.charCodeAt() < 91
      ? 1
      : a.charCodeAt() > 96 && a.charCodeAt() < 123
      ? 0
      : -1;
  const evalutationOfB =
    b.charCodeAt() > 64 && b.charCodeAt() < 91
      ? 1
      : b.charCodeAt() > 96 && b.charCodeAt() < 123
      ? 0
      : -1;
  return evaluationOfA === -1 || evalutationOfB === -1
    ? -1
    : evaluationOfA === evalutationOfB
    ? 1
    : 0;
};

console.assert(sameCase("a", "g") === 1, '"a", "g" return 1');
console.assert(sameCase("A", "C") === 1, '"A", "C" return 1');
console.assert(sameCase("b", "G") === 0, '"b", "G" return 0');
console.assert(sameCase("B", "g") === 0, '"B", "g" return 0');
console.assert(sameCase("0", "?") === -1, '"0", "?" return -1');
console.assert(sameCase("A", "s") === 0, '"A", "s", return 0');
console.log("End");

// clever solution
function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}
