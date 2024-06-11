export const maxProduct = (numbers: number[], size: number) => {
  numbers.sort((a, b) => b - a);

  return numbers.slice(0, size).reduce((res, next) => res * next, 1);
};
