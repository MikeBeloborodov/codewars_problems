export const reverse = (array: any[]) => {
  const arr = [...array];
  return array.map((_) => arr.pop());
};
