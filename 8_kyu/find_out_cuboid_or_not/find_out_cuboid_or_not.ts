export const cubeChecker = (volume: number, side: number): boolean => {
  if (volume <= 0 && side <= 0) return false;
  return Math.cbrt(volume) === side;
};
