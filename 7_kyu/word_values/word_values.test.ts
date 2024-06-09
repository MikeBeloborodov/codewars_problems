import { wordValue } from "./word_values";

describe("test cases", () => {
  it("should return [88, 12 225]", () =>
    expect(wordValue(["codewars", "abc", "xyz"])).toStrictEqual([88, 12, 225]));
});
