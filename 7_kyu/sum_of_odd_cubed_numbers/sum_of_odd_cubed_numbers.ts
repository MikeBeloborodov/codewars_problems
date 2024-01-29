export const cubeOdd = (arr: any[]): number | undefined => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(+arr[i])) return undefined;
    if (Math.pow(arr[i], 3) % 2) sum += Math.pow(arr[i], 3);
  }

  return sum;
};
