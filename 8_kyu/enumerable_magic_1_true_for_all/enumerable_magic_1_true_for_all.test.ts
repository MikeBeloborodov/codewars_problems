import { all } from "./enumerable_magic_1_true_for_all";

describe("test cases", () => {
  it("should return true", () =>
    expect(
      all([1, 2, 3, 4, 5], function (v: number) {
        return v < 9;
      }),
    ).toBe(true));
  it("should return false", () =>
    expect(
      all([1, 2, 3, 4, 5], function (v: number) {
        return v > 9;
      }),
    ).toBe(false));
});
