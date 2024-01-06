import { howMuchILoveYou } from "./i_love_you";

describe("i love you tests", () => {
  it("should return I love you", () =>
    expect(howMuchILoveYou(7)).toBe("I love you"));
  it("should return a lot", () => expect(howMuchILoveYou(3)).toBe("a lot"));
  it("should return not at all", () =>
    expect(howMuchILoveYou(6)).toBe("not at all"));
});
