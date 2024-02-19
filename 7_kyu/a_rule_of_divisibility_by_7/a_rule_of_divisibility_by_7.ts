export const seven = (m: number): number[] => {
  let mString = m.toString().split("");
  const len = mString.length;
  const answer = [0, 0];
  for (let i = 0; i < len - 2; i++) {
    const lastNum = parseInt(mString.pop() as string);
    const remainder = parseInt(mString.join(""));
    answer[1] += 1;
    mString = (remainder - lastNum * 2).toString().split("");
  }
  answer[0] = parseInt(mString.join(""));
  return answer;
};
