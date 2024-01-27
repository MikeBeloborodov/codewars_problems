import { uefaEuro2016 } from "./uefa_euro_2016";

describe("test cases", () => {
  it("should return germany won", () =>
    expect(uefaEuro2016(["Germany", "Ukraine"], [2, 0])).toBe(
      "At match Germany - Ukraine, Germany won!",
    ));
  it("should return italy won", () =>
    expect(uefaEuro2016(["Belgium", "Italy"], [0, 2])).toBe(
      "At match Belgium - Italy, Italy won!",
    ));
  it("should return draw", () =>
    expect(uefaEuro2016(["Portugal", "Iceland"], [1, 1])).toBe(
      "At match Portugal - Iceland, teams played draw.",
    ));
});
