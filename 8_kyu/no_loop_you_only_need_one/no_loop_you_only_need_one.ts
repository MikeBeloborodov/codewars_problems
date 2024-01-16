export const check = (arr: any[], val: any): boolean => {
  const recursive = (n: number): boolean => {
    if (n > arr.length - 1) return false;
    return arr[n] === val ? true : recursive(n + 1);
  };
  return recursive(0);
};
