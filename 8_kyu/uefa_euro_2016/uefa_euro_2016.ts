export const uefaEuro2016 = (teams: string[], scores: number[]): string => {
  return scores[0] === scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    : `At match ${teams[0]} - ${teams[1]}, ${
        teams[scores[0] > scores[1] ? 0 : 1]
      } won!`;
};
