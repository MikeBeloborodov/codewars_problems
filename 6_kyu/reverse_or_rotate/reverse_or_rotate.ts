export const revrot = (str: string, sz: number): string => {
  if (sz === 0) return "";
  let result: string[] = [];
  for (let i = 0; i < str.length; i += sz) {
    const chunk = str.slice(i, i + sz);
    if (chunk.length < sz) continue;
    const isReversable =
      chunk.split("").reduce((s, n) => s + Math.pow(+n, 3), 0) % 2 === 0;
    if (isReversable) result.push(...chunk.split("").reverse());
    else {
      const arr = chunk.split("");
      const fstElem = arr.shift() as string;
      arr.push(fstElem);
      result.push(...arr);
    }
  }
  return result.join("");
};
