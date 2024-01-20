import { highestRank } from "./highest_rank_number_array";

test("test case 1", () => {
  expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 10, 12])).toBe(12);
  expect(highestRank([1, 2, 9, 3, 4, 3, 5, 9, 6, 7, 3, 8, 9])).toBe(9);
});
