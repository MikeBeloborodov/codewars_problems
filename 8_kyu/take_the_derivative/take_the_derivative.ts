export const derive = (coeff: number, exp: number): string => {
  return `${coeff * exp}x^${exp - 1}`;
};
