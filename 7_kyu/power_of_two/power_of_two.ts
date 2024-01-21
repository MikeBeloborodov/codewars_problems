export const isPowerOfTwo = (n: number): boolean => {
  for (let i = 0; Math.pow(2, i) <= n; i++) {
    if (Math.pow(2, i) === n) return true;
  }
  return false;
};
