export const wordsToMarks = (s: string) =>
  s.split("").reduce((sum, val) => sum + val.charCodeAt(0) - 96, 0);
