export const lastSurvivor = (letters: string, coords: number[]) => {
  const lettersArr = letters.split("");
  coords.forEach((n) => lettersArr.splice(n, 1));
  return lettersArr[0];
};
