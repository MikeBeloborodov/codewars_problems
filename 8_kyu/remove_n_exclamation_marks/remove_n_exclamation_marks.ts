export const remove = (s: string, n: number) => {
  return s.replace(/!/gi, (m) => {
    if (n) {
      n--;
      return "";
    }
    return m;
  });
};
