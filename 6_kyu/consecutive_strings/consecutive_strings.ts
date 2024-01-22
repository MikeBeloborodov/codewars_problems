export const longestConsec = (s: string[], k: number): string => {
  if (k < 0) return "";
  let longest = "";

  let i = 0;
  while (i + k <= s.length) {
    if (s.slice(i, i + k).join("").length > longest.length) {
      longest = s.slice(i, i + k).join("");
    }
    i++;
  }

  return longest;
};

// cool reduce solution
/*
  *
  * function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}
  * */
