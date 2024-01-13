import { countBy } from "./count_by_x";

describe("test cases", () => {
  it("should return [1...10]", () =>
    expect(countBy(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  it("should return [2..10]", () =>
    expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]));
});
