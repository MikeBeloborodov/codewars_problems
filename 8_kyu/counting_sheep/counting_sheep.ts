export const countSheeps = (sheep: any[]): number =>
  sheep.reduce((sum, next) => (next ? ++sum : sum), 0);
