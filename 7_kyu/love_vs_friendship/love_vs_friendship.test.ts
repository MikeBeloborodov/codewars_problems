import { wordsToMarks } from "./love_vs_friendship";

describe("test cases", () => {
  it("should return 100", () => expect(wordsToMarks("attitude")).toBe(100));
  it("should return 75", () => expect(wordsToMarks("friends")).toBe(75));
  it("should return 66", () => expect(wordsToMarks("family")).toBe(66));
});
