export const sumTriangularNumbers = (n: number): number => {
  if (n <= 0) return 0;

  let sum = 0;
  let curr = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      curr++;
    }
    sum += curr;
  }

  return sum;
};
