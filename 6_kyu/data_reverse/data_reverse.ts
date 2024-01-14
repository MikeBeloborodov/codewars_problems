export const dataReverse = (data: number[]): number[] => {
  const result: number[][] = [];
  const chunk: number[] = [];

  data.forEach((item) => {
    chunk.push(item);
    if (chunk.length === 8) {
      result.push([...chunk]);
      chunk.length = 0;
    }
  });

  return result.reverse().flat();
};
