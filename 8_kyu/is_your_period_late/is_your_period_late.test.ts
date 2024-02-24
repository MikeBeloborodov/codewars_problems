import { periodIsLate } from "./is_your_period_late";

describe("test cases", () => {
  it("should return false", () =>
    expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)).toBe(
      false,
    ));
});
