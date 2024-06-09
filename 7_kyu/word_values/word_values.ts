export const wordValue = (a: string[]): number[] =>
  a.map(
    (item, index) =>
      (index + 1) *
      item
        .replace(/\s/g, "")
        .split("")
        .reduce((sum, val) => sum + val.charCodeAt(0) - 96, 0),
  );
