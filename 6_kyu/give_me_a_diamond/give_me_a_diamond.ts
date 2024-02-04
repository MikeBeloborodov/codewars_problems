export const diamond = (n: number): string | null => {
  if (n <= 0 || n % 2 === 0) return null;
  if (n === 1) return "*\n";
  const side = [...Array(Math.floor(n / 2))].map(
    (_, i, arr) => " ".repeat(arr.length - i) + "*".repeat(i * 2 + 1) + "\n",
  );
  return side.join("") + "*".repeat(n) + "\n" + side.reverse().join("");
};
