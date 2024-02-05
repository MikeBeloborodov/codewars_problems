import { twoSum } from "./two_sum";

describe("test cases", () => {
  it("should return [0, 2]", () =>
    expect(twoSum([1, 2, 3], 4)).toStrictEqual([0, 2]));
  it("should return null", () => expect(twoSum([1, 2, 3], 10)).toBe(null));
});
