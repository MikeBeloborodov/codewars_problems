/*
  * Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
  * */

// my solution
const multiply = (number) => {
  const numAsString =
    number.toString()[0] === "-"
      ? number.toString().slice(1)
      : number.toString();
  return number * Math.pow(5, numAsString.length);
};

console.assert(multiply(3) === 15, "multiply(3) === 15");
console.assert(multiply(10) === 250, "multiply(10) === 250");
console.assert(multiply(200) === 25000, "multiply(200) === 25000");
console.assert(multiply(0) === 0, "multiply(0) === 0");
console.assert(multiply(-3) === -15, "multiply(-3) === -15");

// clever solution
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}
