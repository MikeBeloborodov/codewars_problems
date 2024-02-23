function allRotations(str: string): string[] {
  return str.split("").reduce((result, _, i, arr) => {
    result.push(
      arr.reduce((resStr, _, j) => {
        j += i;
        return (resStr += arr[j < arr.length ? j : j - arr.length]);
      }, ""),
    );
    return result;
  }, [] as string[]);
}

export function containAllRots(str: string, testArr: string[]): boolean {
  return allRotations(str).every((item) => testArr.includes(item));
}
