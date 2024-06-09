export const stray = (n: number[]): number => {
  if (n[0] === n[1]) {
    return n.find((num) => num !== n[0])!;
  } else {
    if (n[0] !== n[2]) return n[0];
    else return n[1];
  }
};
