export const breakCamelCase = (s: string): string =>
  s.replace(/[A-Z]/g, (m) => " " + m);
