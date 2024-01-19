export const calculateTip = (a: number, r: string): number | string => {
  const ratings = ["terrible", "poor", "good", "great", "excellent"];
  return ratings.includes(r.toLowerCase())
    ? Math.ceil(a * 0.05 * ratings.indexOf(r.toLowerCase()))
    : "Rating not recognised";
};
