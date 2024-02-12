interface Score {
  accounts: number;
  finance: number;
  canteen: number;
  regulation: number;
  trading: number;
  change: number;
  IS: number;
  retail: number;
  cleaning: number;
  "pissing about": number;
}

type Office = Record<string, keyof Score>;

export const boredom = (staff: Office): string => {
  const score: any = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  const result = Object.values(staff).reduce(
    (sum: number, key: string) => sum + score[key],
    0,
  );

  return result <= 80
    ? "kill me now"
    : result > 80 && result < 100
      ? "i can handle this"
      : "party time!!";
};
