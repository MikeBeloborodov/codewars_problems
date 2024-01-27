export const meeting = (s: string): string => {
  return s
    .toUpperCase()
    .split(";")
    .map((v) => "(" + v.split(":").reverse().join(", ") + ")")
    .sort((a, b) => {
      const A = a.split(", ").join();
      const B = b.split(", ").join();
      for (let i = 0; i < a.length; i++) {
        if (A[i] !== B[i]) return A[i].charCodeAt(0) - B[i].charCodeAt(0);
      }
      return 0;
    })
    .join("");
};
