export const capitalize = (s: string, arr: number[]): string =>
  s
    .split("")
    .map((letter, index) =>
      arr.includes(index) ? letter.toUpperCase() : letter,
    )
    .join("");
