type TOperator = "AND" | "OR" | "XOR";

export const logicalCalc = (array: boolean[], op: TOperator): boolean => {
  return array.reduce((first, next) => {
    switch (op) {
      case "AND":
        return first && next;
      case "OR":
        return first || next;
      case "XOR":
        return first != next;
    }
  });
};
