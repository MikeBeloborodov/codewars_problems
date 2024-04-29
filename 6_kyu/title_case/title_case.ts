export const titleCase = (
  title: string,
  minorWords: string | undefined = undefined,
): string => {
  const stopWords = minorWords?.split(" ").map((w) => w.toLowerCase());
  return title.replace(/\b\w+\b/gi, (match, offset) => {
    if (offset && stopWords && stopWords.includes(match.toLowerCase())) {
      return match.toLowerCase();
    }
    return match[0].toUpperCase() + match.toLowerCase().slice(1);
  });
};
