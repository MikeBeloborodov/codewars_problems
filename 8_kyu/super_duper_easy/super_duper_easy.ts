export const superDuperEasy = (input: string | number): string | number => {
  return typeof input === "string" ? "Error" : input * 50 + 6;
};
