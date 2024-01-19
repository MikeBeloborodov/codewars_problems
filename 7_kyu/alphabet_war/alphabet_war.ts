export const alphabetWar = (fight: string) => {
  const leftSide: any = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide: any = { m: 4, q: 3, d: 2, z: 1 };

  const result = fight.split("").reduce(
    (score, letter) => {
      if (leftSide[letter]) {
        score[0] += leftSide[letter];
      }
      if (rightSide[letter]) {
        score[1] += rightSide[letter];
      }
      return score;
    },
    [0, 0],
  );

  return result[0] > result[1]
    ? "Left side wins!"
    : result[0] < result[1]
      ? "Right side wins!"
      : "Let's fight again!";
};
