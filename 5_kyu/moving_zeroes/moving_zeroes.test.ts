import { moveZeroes } from "./moving_zeroes";

describe("test cases", () => {
  it("should test", () =>
    expect(moveZeroes([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toStrictEqual([
      false,
      1,
      1,
      2,
      1,
      3,
      "a",
      0,
      0,
    ]));
});
