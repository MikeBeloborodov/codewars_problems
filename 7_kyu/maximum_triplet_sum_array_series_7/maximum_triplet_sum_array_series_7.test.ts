import { maxTriSum } from "./maximum_triplet_sum_array_series_7";

describe("test cases", () => {
  it("should return 17", () => expect(maxTriSum([3, 2, 6, 8, 2, 3])).toBe(17));
  it("should return 0", () => expect(maxTriSum([-2, 0, 2])).toBe(0));
});
