export const isAnagram = (test: string, original: string) => {
  if (test.length !== original.length) return false;
  const str1 = test.toLowerCase().split("").sort();
  const str2 = original.toLowerCase().split("").sort();
  return str1.every((letter, index) => letter === str2[index]);
};
