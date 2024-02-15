export const lowercaseCount = (str: string) => {
  const regex = /[a-z]/g;
  const match = str.match(regex);
  return match ? match.length : 0;
};
