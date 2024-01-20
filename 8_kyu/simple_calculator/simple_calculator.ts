export const calculator = (
  a: number,
  b: number,
  sign: string,
): number | string => {
  if (typeof a !== "number" || typeof b !== "number" || !"+-*/".includes(sign))
    return "unknown value";
  const operations: any = { "+": a + b, "-": a - b, "*": a * b, "/": a / b };
  return operations[sign];
};
