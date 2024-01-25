export const capitalize = (s: string): string[] =>
  s.split("").reduce(
    (res, next, i) => {
      if (i % 2 === 0) {
        res[0] += next.toUpperCase();
        res[1] += next.toLowerCase();
      } else {
        res[0] += next.toLowerCase();
        res[1] += next.toUpperCase();
      }
      return res;
    },
    ["", ""],
  );
