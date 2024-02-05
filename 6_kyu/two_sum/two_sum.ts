export const twoSum = (numbers: number[], target: number): number[] | null => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let num1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let num2 = numbers[j];
      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
  return null;
};
