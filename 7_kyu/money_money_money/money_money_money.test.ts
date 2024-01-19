import { calculateYears } from "./money_money_money";

describe("test cases", () => {
  it("should return 3", () =>
    expect(calculateYears(1000, 0.05, 0.18, 1100)).toBe(3));
  it("should return 14", () =>
    expect(calculateYears(1000, 0.01625, 0.18, 1200)).toBe(14));
  it("should return 0", () =>
    expect(calculateYears(1000, 0.05, 0.18, 1000)).toBe(0));
});
