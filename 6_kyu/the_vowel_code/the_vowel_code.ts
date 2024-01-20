const vowels = ["a", "e", "i", "o", "u"];

export const encode = (s: string): string => {
  return s
    .split("")
    .map((l) => (vowels.includes(l) ? (vowels.indexOf(l) + 1).toString() : l))
    .join("");
};

export const decode = (s: string): string => {
  return s
    .split("")
    .map((l) =>
      !Number.isNaN(parseInt(l)) && vowels[parseInt(l) - 1]
        ? vowels[parseInt(l) - 1]
        : l,
    )
    .join("");
};
