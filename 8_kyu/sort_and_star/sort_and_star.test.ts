import { twoSort } from "./sort_and_star";

describe("test cases", () => {
  it("should return b***i***t***c***o***i***n", () =>
    expect(
      twoSort([
        "bitcoin",
        "take",
        "over",
        "the",
        "world",
        "maybe",
        "who",
        "knows",
        "perhaps",
      ]),
    ).toBe("b***i***t***c***o***i***n"));
});
