/*
  https://www.codewars.com/kata/55983863da40caa2c900004e/typescript
  
  Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
  * */

export const nextBigger = (n: number): number => {
  const nStrArr: string[] = n.toString().split("");
  let pivotIndex: number = -1;

  for (let i = nStrArr.length - 1; i > 0; i--) {
    if (parseInt(nStrArr[i]) > parseInt(nStrArr[i - 1])) {
      pivotIndex = i - 1;
      break;
    }
  }

  if (pivotIndex === -1) return -1;

  let leftPart: string[] = nStrArr.slice(0, pivotIndex);
  let pivot: string = nStrArr.slice(pivotIndex)[0];
  let rightPart: string[] = nStrArr
    .slice(pivotIndex + 1)
    .sort((a, b) => parseInt(a) - parseInt(b));

  for (let i = 0; i < rightPart.length; i++) {
    if (parseInt(rightPart[i]) > parseInt(pivot)) {
      let buffer = rightPart[i];
      rightPart[i] = pivot;
      pivot = buffer;
      break;
    }
  }

  const result = leftPart.join("") + pivot + rightPart.join("");

  return parseInt(result);
};
