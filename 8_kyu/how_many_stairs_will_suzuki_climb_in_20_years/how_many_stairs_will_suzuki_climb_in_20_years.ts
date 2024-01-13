export const stairsIn20 = (s: number[][]): number => {
  return (
    s.reduce((sum, next) => {
      return sum + next.reduce((sum, next) => sum + next);
    }, 0) * 20
  );
};
