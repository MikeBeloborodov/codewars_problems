export const bump = (x: string): string => {
  const matches = x.match(/n/gi);
  if (matches && matches.length > 15) {
    return "Car Dead";
  }
  return "Woohoo!";
};
