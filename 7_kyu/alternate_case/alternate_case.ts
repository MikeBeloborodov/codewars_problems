export const alternateCase = (s: string): string =>
  s
    .split("")
    .map((v) => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
    .join("");
