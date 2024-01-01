/*
  *
  https://www.codewars.com/kata/5324945e2ece5e1f32000370

  Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.


  * */

const sumStrings = (a: string, b: string): string => {
  const [long, short] =
    a.length >= b.length
      ? [a.split("").reverse().join(""), b.split("").reverse().join("")]
      : [b.split("").reverse().join(""), a.split("").reverse().join("")];
  let remainder = 0;
  let result = "";

  for (let i = 0; i < long.length; i++) {
    if (i < short.length) {
      const calculation = (
        parseInt(long[i]) +
        parseInt(short[i]) +
        remainder
      ).toString();
      if (calculation.length > 1) {
        remainder = parseInt(calculation[0]);
        result = calculation[1] + result;
      } else {
        remainder = 0;
        result = calculation[0] + result;
      }
      continue;
    }
    const calculation = (parseInt(long[i]) + remainder).toString();
    if (calculation.length > 1) {
      remainder = parseInt(calculation[0]);
      result = calculation[1] + result;
    } else {
      remainder = 0;
      result = calculation[0] + result;
    }
  }
  if (remainder > 0) result = remainder + result;

  while (result[0] === "0") {
    result = result.slice(1);
  }

  return result;
};

const case1 = sumStrings("1234", "567");
console.assert(case1 === "1801", "case1");

const case2 = sumStrings("8797", "45");
console.assert(case2 === "8842", "case2");

const case3 = sumStrings("00103", "08567");
console.assert(case3 === "8670", "case3");
