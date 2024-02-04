export const maxDiff = (list: number[]): number => {
  if (list.length < 2) return 0;
  const sorted = [...list].sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
};
