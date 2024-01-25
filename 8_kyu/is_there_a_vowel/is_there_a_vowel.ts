export const isVow = (a: number[]): Array<string | number> => {
  const vowels = ["a", "e", "i", "o", "u"];
  return a.map((v) =>
    vowels.includes(String.fromCharCode(v)) ? String.fromCharCode(v) : v,
  );
};
