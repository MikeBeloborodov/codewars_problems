export const strong = (n: number): string => {
  const digits = n.toString().split("");
  const factorial = (k: number): number => {
    let sum = 1;
    for (; k > 0; k--) sum *= k;
    return sum;
  };
  return digits.reduce((t, v) => t + factorial(+v), 0) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
};
