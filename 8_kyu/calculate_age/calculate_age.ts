export const calculateAge = (brthDate: number, relDate: number): string => {
  const diff = relDate - brthDate;
  return diff === 0
    ? "You were born this very year!"
    : diff > 0
      ? `You are ${diff} ${diff === 1 ? "year" : "years"} old.`
      : `You will be born in ${Math.abs(diff)} ${
          diff === -1 ? "year" : "years"
        }.`;
};
