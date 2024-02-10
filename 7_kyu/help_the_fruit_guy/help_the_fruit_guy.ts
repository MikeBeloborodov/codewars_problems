export const removeRotten = (bagOfFruits: string[] | null): string[] =>
  bagOfFruits
    ? bagOfFruits.map((s) => s.toLowerCase().replace("rotten", ""))
    : [];
