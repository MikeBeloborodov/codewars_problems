import { findEvenIndex } from "./equal_sides_array";

describe("equal sides array tests", () => {
  it("should return 3", () =>
    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3));
  it("should return 1", () =>
    expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1));
  it("should return -1", () =>
    expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1));
  it("should return 3", () =>
    expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3));
  it("should return 0", () =>
    expect(findEvenIndex([20, 10, -80, 10, 10, 15, 35])).toBe(0));
});
