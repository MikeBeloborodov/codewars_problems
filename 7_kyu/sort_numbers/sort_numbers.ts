export const sortNumbers = (nums: number[] | null): number[] => {
  return nums ? [...nums].sort((a, b) => a - b) : [];
};
