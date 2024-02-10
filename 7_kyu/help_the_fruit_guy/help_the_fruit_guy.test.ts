import { removeRotten } from "./help_the_fruit_guy";

describe("test cases", () => {
  it("should test", () =>
    expect(
      removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"]),
    ).toStrictEqual(["apple", "banana", "kiwi", "melone", "orange"]));
  it("should test", () => expect(removeRotten([])).toStrictEqual([]));
  it("should test", () => expect(removeRotten(null)).toStrictEqual([]));
});
