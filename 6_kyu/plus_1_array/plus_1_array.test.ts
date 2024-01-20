import { upArray } from "./plus_1_array";

describe("test cases", () => {
  test("test case 1", () => {
    expect(upArray([4, 3, 2, 5])).toStrictEqual([4, 3, 2, 6]);
  });
  test("test case 2", () => {
    expect(upArray([0, 7])).toStrictEqual([0, 8]);
  });
  test("test case 3", () => {
    expect(upArray([9, 9])).toStrictEqual([1, 0, 0]);
  });
  test("test case 4", () => {
    expect(
      upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
    ).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
    ]);
  });
  test("test case 5", () => {
    expect(upArray([0, 0, 4, 3, 9])).toStrictEqual([0, 0, 4, 4, 0]);
  });
  it("should return null", () => expect(upArray([])).toBe(null));
  it("should return null", () => expect(upArray([-1, -2])).toBe(null));
  it("should return null", () => expect(upArray([10, 20])).toBe(null));
});
