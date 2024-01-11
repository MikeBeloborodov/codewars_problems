export const sortByLength = (a: string[]): string[] =>
  [...a].sort((x, y) => x.length - y.length);
