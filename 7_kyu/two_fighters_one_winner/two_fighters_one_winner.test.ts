import { Fighter, declareWinner } from "./two_fighters_one_winner";

describe("test cases", () => {
  it("should return Lew", () =>
    expect(
      declareWinner(
        new Fighter("Lew", 10, 2),
        new Fighter("Harry", 5, 4),
        "Lew",
      ),
    ).toBe("Lew"));
  it("should return Harry", () =>
    expect(
      declareWinner(
        new Fighter("Lew", 10, 2),
        new Fighter("Harry", 5, 4),
        "Harry",
      ),
    ).toBe("Harry"));
  it("should return Harald", () =>
    expect(
      declareWinner(
        new Fighter("Harald", 20, 5),
        new Fighter("Harry", 5, 4),
        "Harry",
      ),
    ).toBe("Harald"));
});
