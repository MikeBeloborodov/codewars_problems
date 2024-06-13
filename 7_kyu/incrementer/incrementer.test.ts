import { incrementer } from "./incrementer";

describe("test cases", () => {
  it("should ", () => expect(incrementer([1, 2, 3])).toStrictEqual([2, 4, 6]));
  it("should ", () =>
    expect(incrementer([4, 6, 7, 1, 3])).toStrictEqual([5, 8, 0, 5, 8]));
});
