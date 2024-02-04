import { maxDiff } from "./max_diff_easy";

describe("test cases", () => {
  it("should return 6", () => expect(maxDiff([0, 1, 2, 3, 4, 5, 6])).toBe(6));
  it("should return 11", () =>
    expect(maxDiff([-0, 1, 2, -3, 4, 5, -6])).toBe(11));
  it("should return 0", () => expect(maxDiff([])).toBe(0));
  it("should return 0", () => expect(maxDiff([16])).toBe(0));
});
