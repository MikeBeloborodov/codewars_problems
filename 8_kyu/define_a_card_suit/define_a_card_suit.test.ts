import { defineSuit } from "./define_a_card_suit";

describe("test cases", () => {
  it("should return spades", () => expect(defineSuit("Q♠")).toBe("spades"));
  it("should return hearts", () => expect(defineSuit("J♥")).toBe("hearts"));
  it("should return diamonds", () =>
    expect(defineSuit("9♦")).toBe("diamonds"));
  it("should return clubs", () => expect(defineSuit("5♣")).toBe("clubs"));
  it("should not found", () => expect(defineSuit("5d")).toBe("no suit found"));
});
