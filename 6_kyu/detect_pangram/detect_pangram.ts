export const isPangram = (phrase: string): boolean => {
  const characterSet = new Set(
    phrase
      .toUpperCase()
      .trim()
      .split("")
      .filter((char) => char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91),
  );
  return characterSet.size === 26;
};
