import { sortNumbers } from "./sort_numbers";

describe("test cases", () => {
  it("should return [1,2,3,5,10]", () =>
    expect(sortNumbers([1, 2, 3, 10, 5])).toStrictEqual([1, 2, 3, 5, 10]));
  it("should return []", () => expect(sortNumbers(null)).toStrictEqual([]));
});
