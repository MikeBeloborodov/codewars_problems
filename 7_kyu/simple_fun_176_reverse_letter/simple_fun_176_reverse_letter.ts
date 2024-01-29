export const reverseLetter = (str: string): string =>
  str
    .replace(/[\W0-9_]/g, "")
    .split("")
    .reverse()
    .join("");
