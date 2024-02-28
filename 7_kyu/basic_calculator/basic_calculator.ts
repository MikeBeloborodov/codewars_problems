interface ICalculator {
  [K: string]: (a: number, b: number) => number | null;
}

export const calculate = (num1: number, operation: string, num2: number) => {
  const calc: ICalculator = {
    "-": (a: number, b: number) => a - b,
    "+": (a: number, b: number) => a + b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => (b === 0 ? null : a / b),
  };
  return Object.keys(calc).includes(operation)
    ? calc[operation](num1, num2)
    : null;
};
