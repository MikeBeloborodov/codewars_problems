export const uniTotal = (s: string): number =>
  s.split("").reduce((sum, next) => sum + next.charCodeAt(0), 0);
