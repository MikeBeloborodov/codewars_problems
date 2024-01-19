import { odds } from "./odd_function";

describe("test cases", () => {
  it("should return [1,3,5]", () =>
    expect(odds([1, 3, 5])).toStrictEqual([1, 3, 5]));
  it("should return []", () => expect(odds([2, 4, 8])).toStrictEqual([]));
  it("should return [3,7]", () =>
    expect(odds([2, 4, 3, 6, 7])).toStrictEqual([3, 7]));
});
