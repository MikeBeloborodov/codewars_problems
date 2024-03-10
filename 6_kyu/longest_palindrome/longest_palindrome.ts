export const longestPalindrome = (s: string): number => {
  if (!s.length) return 0;

  const isPalindrome = (str: string): boolean =>
    str.split("").reverse().join("") === str;
  let longest = 0;
  for (let indx = 0; indx < s.length; indx++) {
    let currString = "";
    for (let currIndx = indx; currIndx < s.length; currIndx++) {
      currString += s[currIndx];
      if (isPalindrome(currString)) {
        longest = currString.length > longest ? currString.length : longest;
      }
    }
  }
  return longest;
};
