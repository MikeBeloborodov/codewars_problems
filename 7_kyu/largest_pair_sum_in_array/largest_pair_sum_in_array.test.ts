import { largestPairSum } from "./largest_pair_sum_in_array";

describe("test cases", () => {
  it("should return 42", () =>
    expect(largestPairSum([10, 14, 2, 23, 19])).toBe(42));
  it("should return 0", () =>
    expect(largestPairSum([-100, -29, -24, -19, 19])).toBe(0));
  it("should return 10", () =>
    expect(largestPairSum([1, 2, 3, 4, 6, -1, 2])).toBe(10));
  it("should return -18", () =>
    expect(largestPairSum([-10, -8, -16, -18, -19])).toBe(-18));
});
