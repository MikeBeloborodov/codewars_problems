export const splitInParts = (s: string, partLength: number) => {
  const split = [];
  const sArr = s.split("");

  while (sArr.length) {
    split.push(sArr.splice(0, partLength).join(""));
  }

  return split.join(" ");
};
