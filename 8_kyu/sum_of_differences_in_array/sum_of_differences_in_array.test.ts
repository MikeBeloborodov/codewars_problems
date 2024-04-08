import { sumOfDifferences } from "./sum_of_differences_in_array";

describe("test cases", () => {
  it("should return 9", () => expect(sumOfDifferences([1, 2, 10])).toBe(9));
  it("should return 2", () => expect(sumOfDifferences([-3, -2, -1])).toBe(2));
  it("should return 0", () => expect(sumOfDifferences([])).toBe(0));
});
