import { minSum } from "./minimize_sum_of_array";

describe("test cases", () => {
  it("should return 22", () => expect(minSum([5, 4, 2, 3])).toBe(22));
  it("should return 342", () =>
    expect(minSum([12, 6, 10, 26, 3, 24])).toBe(342));
  it("should return 74", () =>
    expect(minSum([9, 2, 8, 7, 5, 4, 0, 6])).toBe(74));
});
